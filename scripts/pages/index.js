import Section from "../components/Section.js";
import Card from "../components/Card.js";
import {
  cardsContainer,
  editProfileButton,
  addNewPlaceButton,
  settingsFormEditProfile,
  settingsFormAddNewPlace,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  activeButtonEditProfile,
  showInputsFormEditProfile,
  disabledButtonAddNewPlace,
  removeEventListener,
} from "../utils/utils.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "c7ddeb73-151f-41a7-9f67-d93995416067",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((result) => {
    const cardSection = new Section(
      {
        items: result,
        renderer: (item) => {
          const card = new Card(item, "#card-template", () => {
            popupCardImage.open(item.link, item.name);
          });
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

const popupCardImage = new PopupWithImage("#popup__show-image");

popupCardImage.setEventListeners();
removeEventListener();

const formValidatorEditProfile = new FormValidator(
  settingsFormEditProfile.settings,
  settingsFormEditProfile.formSelector
);

formValidatorEditProfile.enableValidation();

const dataUser = new UserInfo(".content__profile-name", ".content__about-me");

api
  .getProfile()
  .then((result) => {
    dataUser.setUserInfo(result.name, result.about);
    document.querySelector(".content__avatar-image").src = result.avatar;
  })
  .catch((err) => {
    console.log(err);
  });

const popupFormEditProfile = new PopupWithForm(
  "#popup__edit-profile",
  (inputsValues) => {
    dataUser.setUserInfo(inputsValues[0].value, inputsValues[1].value);
  }
);

popupFormEditProfile.setEventListeners();

editProfileButton.addEventListener("click", () => {
  formValidatorEditProfile.resetValidation();
  activeButtonEditProfile();
  popupFormEditProfile.open();
  showInputsFormEditProfile(dataUser.getUserInfo());
});

const formValidatorAddNewPlace = new FormValidator(
  settingsFormAddNewPlace.settings,
  settingsFormAddNewPlace.formSelector
);

formValidatorAddNewPlace.enableValidation();

const popupFormAddNewPlace = new PopupWithForm(
  "#popup__add-new-place",
  (inputsValues) => {
    const title = inputsValues[0].value;
    const image = inputsValues[1].value;
    const card = new Card(
      {
        title: title,
        image: image,
      },
      "#card-template",
      () => {
        popupCardImage.open(image, title);
      }
    );
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
  }
);

popupFormAddNewPlace.setEventListeners();

addNewPlaceButton.addEventListener("click", () => {
  formValidatorAddNewPlace.resetValidation();
  disabledButtonAddNewPlace();
  popupFormAddNewPlace.open();
});
