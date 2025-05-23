import Section from "../scripts/components/Section.js";
import Card from "../scripts/components/Card.js";
import {
  cardsContainer,
  editProfileButton,
  addNewPlaceButton,
  settingsFormEditProfile,
  settingsFormAddNewPlace,
  settingsFormEditImageProfile,
  editImageProfile,
  editImageProfileContainer,
} from "../scripts/utils/constants.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {
  activeButtonEditProfile,
  showInputsFormEditProfile,
  disabledButtonAddNewPlace,
  disabledButtonEditImageProfile,
  removeEventListener,
} from "../scripts/utils/utils.js";
import Api from "../scripts/components/Api.js";

const dataUser = new UserInfo(".content__profile-name", ".content__about-me");
const popupCardImage = new PopupWithImage("#popup__show-image");
const formValidatorEditProfile = new FormValidator(
  settingsFormEditProfile.settings,
  settingsFormEditProfile.formSelector
);
const formValidatorAddNewPlace = new FormValidator(
  settingsFormAddNewPlace.settings,
  settingsFormAddNewPlace.formSelector
);
const formValidatorEditImageProfile = new FormValidator(
  settingsFormEditImageProfile.settings,
  settingsFormEditImageProfile.formSelector
);
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "c7ddeb73-151f-41a7-9f67-d93995416067",
    "Content-Type": "application/json",
  },
});
const apiDelete = (ide, element) => {
  api
    .deleteCard(ide)
    .then((result) => {
      console.log(result.message);
      element.remove();
    })
    .catch((err) => {
      console.log(err);
    });
};
const popupFormEditProfile = new PopupWithForm(
  "#popup__edit-profile",
  (inputsValues) => {
    api
      .editProfile(inputsValues[0].value, inputsValues[1].value)
      .then((result) => {
        dataUser.setUserInfo(result.name, result.about);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
const popupDeleteConfirmationCard = new PopupWithConfirmation(
  "#popup__delete-confirmation"
);
const popupFormAddNewPlace = new PopupWithForm(
  "#popup__add-new-place",
  (inputsValues) => {
    api
      .addNewPlace(inputsValues[0].value, inputsValues[1].value)
      .then((result) => {
        const card = new Card(
          {
            _id: result._id,
            name: result.name,
            link: result.link,
            isLiked: result.isLiked,
          },
          "#card-template",
          () => {
            popupCardImage.open(result.link, result.name);
          },
          (id, element) => {
            api
              .deleteLiked(id)
              .then((result) => {
                card._isLiked = result.isLiked;
                element
                  .querySelector(".content__like-button-label")
                  .classList.remove("content__like-button-label-active");
              })
              .catch((err) => {
                console.log(err);
              });
          },
          (id, element) => {
            api
              .isLiked(id)
              .then((result) => {
                card._isLiked = result.isLiked;
                element
                  .querySelector(".content__like-button-label")
                  .classList.add("content__like-button-label-active");
              })
              .catch((err) => {
                console.log(err);
              });
          },
          function (id, element) {
            popupDeleteConfirmationCard.open();
            popupDeleteConfirmationCard.submitAction({
              api: apiDelete,
              id: id,
              element: element,
            });
          }
        );
        const cardElement = card.generateCard();
        cardsContainer.prepend(cardElement);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
const popupFormEditImageProfile = new PopupWithForm(
  "#popup__edit-image-profile",
  (inputValue) => {
    api
      .editImageProfile(inputValue[0].value)
      .then((result) => {
        editImageProfile.src = result.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

api
  .getProfileUser()
  .then((result) => {
    dataUser.setUserInfo(result.name, result.about);
    editImageProfile.src = result.avatar;
  })
  .catch((err) => {
    console.log(err);
  });

api
  .getInitialCards()
  .then((result) => {
    const cardSection = new Section(
      {
        items: result,
        renderer: (item) => {
          const card = new Card(
            item,
            "#card-template",
            () => {
              popupCardImage.open(item.link, item.name);
            },
            (id, element) => {
              api
                .deleteLiked(id)
                .then((result) => {
                  card._isLiked = result.isLiked;
                  element
                    .querySelector(".content__like-button-label")
                    .classList.remove("content__like-button-label-active");
                })
                .catch((err) => {
                  console.log(err);
                });
            },
            (id, element) => {
              api
                .isLiked(id)
                .then((result) => {
                  card._isLiked = result.isLiked;
                  element
                    .querySelector(".content__like-button-label")
                    .classList.add("content__like-button-label-active");
                })
                .catch((err) => {
                  console.log(err);
                });
            },
            function (id, element) {
              popupDeleteConfirmationCard.open();
              popupDeleteConfirmationCard.submitAction({
                api: apiDelete,
                id: id,
                element: element,
              });
            }
          );
          const cardElement = card.generateCard();
          cardSection.addItem(cardElement);
        },
      },
      ".content__images"
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

popupDeleteConfirmationCard.setEventListeners();
popupCardImage.setEventListeners();
popupFormEditProfile.setEventListeners();
popupFormAddNewPlace.setEventListeners();
popupFormEditImageProfile.setEventListeners();

removeEventListener();

formValidatorEditProfile.enableValidation();
formValidatorAddNewPlace.enableValidation();
formValidatorEditImageProfile.enableValidation();

editProfileButton.addEventListener("click", () => {
  formValidatorEditProfile.resetValidation();
  activeButtonEditProfile();
  popupFormEditProfile.open();
  showInputsFormEditProfile(dataUser.getUserInfo());
});

addNewPlaceButton.addEventListener("click", () => {
  formValidatorAddNewPlace.resetValidation();
  disabledButtonAddNewPlace();
  popupFormAddNewPlace.open();
});

editImageProfileContainer.addEventListener("click", () => {
  editImageProfileContainer.classList.remove(
    "content__icon-edit-image-profile-container-active"
  );
  formValidatorEditImageProfile.resetValidation();
  disabledButtonEditImageProfile();
  popupFormEditImageProfile.open();
});

editImageProfileContainer.addEventListener("mouseover", () => {
  editImageProfileContainer.classList.add(
    "content__icon-edit-image-profile-container-active"
  );
});

editImageProfileContainer.addEventListener("mouseout", () => {
  editImageProfileContainer.classList.remove(
    "content__icon-edit-image-profile-container-active"
  );
});
