import Section from "../components/Section.js";
import Card from "../components/Card.js";
import {
  cardsContainer,
  editProfileButton,
  addNewPlaceButton,
  settingsFormEditProfile,
  settingsFormAddNewPlace,
  settingsFormEditImageProfile,
  editImageProfile,
  editImageProfileContainer,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  activeButtonEditProfile,
  showInputsFormEditProfile,
  disabledButtonAddNewPlace,
  disabledButtonEditImageProfile,
  removeEventListener,
} from "../utils/utils.js";
import Api from "../components/Api.js";

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

api.getInfoProfileUser().then((result) => {
  dataUser.setUserInfo(result[0].name, result[0].about);
  editImageProfile.src = result[0].avatar;
  const cardSection = new Section(
    {
      items: result[1],
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
          }
        );
        const cardElement = card.generateCard();
        cardSection.addItem(cardElement);
      },
    },
    ".content__images"
  );
  cardSection.renderItems();
});

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
  formValidatorEditImageProfile.resetValidation();
  disabledButtonEditImageProfile();
  popupFormEditImageProfile.open();
});
