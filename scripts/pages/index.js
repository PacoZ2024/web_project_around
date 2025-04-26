import Section from "../components/Section.js";
import Card from "../components/Card.js";
import {
  initialCards,
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

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template", () => {
        popupCardImage.open(item.image, item.title);
      });
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".content__images"
);

cardSection.renderItems();

const popupCardImage = new PopupWithImage("#popup__show-image");

popupCardImage.setEventListeners();
removeEventListener();

const formValidatorEditProfile = new FormValidator(
  settingsFormEditProfile.settings,
  settingsFormEditProfile.formSelector
);

formValidatorEditProfile.enableValidation();

const dataUser = new UserInfo(".content__profile-name", ".content__about-me");

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
