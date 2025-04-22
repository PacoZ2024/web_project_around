import Card from "./Card.js";
import { formValidatorEditProfile, formValidatorAddNewPlace } from "./index.js";

//Constantes utilizadas para los manejadores de los eventos
const popupEditProfile = document.querySelector("#popup__edit-profile");
const popupAddNewPlace = document.querySelector("#popup__add-new-place");

const content = document.querySelector(".content");
const profileName = content.querySelector(".content__profile-name");
const aboutMe = content.querySelector(".content__about-me");
const cardsContainer = document.querySelector(".content__images");

const formEditProfile = document.forms.formEditProfile;
const formAddNewPlace = document.forms.formAddNewPlace;
const fieldName = document.forms.formEditProfile.elements.fieldName;
const fieldAboutMe = document.forms.formEditProfile.elements.fieldAboutMe;
const fieldTitle = document.forms.formAddNewPlace.elements.fieldTitle;
const fieldLinkImage = document.forms.formAddNewPlace.elements.fieldLinkImage;

//Manejadores de eventos para abrir los formularios
function handleOpenPopupEditProfile() {
  const buttonElement = formEditProfile.querySelector(".form__button");
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove("form__button-disabled");
  popupEditProfile.classList.add("popup__open");
  fieldName.value = profileName.textContent;
  fieldAboutMe.value = aboutMe.textContent;
}

function handleOpenPopupAddNewPlace() {
  popupAddNewPlace.classList.add("popup__open");
}

//Manejadores de eventos para cerrar los formularios y la vista de la imagen
function handleClosePopupEditProfile() {
  popupEditProfile.classList.remove("popup__open");
  formValidatorEditProfile.resetValidation();
}

function handleClosePopupAddNewPlace() {
  popupAddNewPlace.classList.remove("popup__open");
  formValidatorAddNewPlace.resetValidation();
  formAddNewPlace.reset();
}

function handleClosePopupShowImage(evt) {
  evt.target.closest(".popup").classList.remove("popup__open");
}

//Manejadores de eventos para enviar la información de los formularios
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = fieldName.value;
  aboutMe.textContent = fieldAboutMe.value;
  handleClosePopupEditProfile();
}

function handleAddNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const card = new Card(
    {
      title: fieldTitle.value,
      image: fieldLinkImage.value,
    },
    "#card-template"
  );
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  fieldTitle.value = "";
  fieldLinkImage.value = "";
  handleClosePopupAddNewPlace();
}

export {
  popupEditProfile,
  popupAddNewPlace,
  content,
  formEditProfile,
  formAddNewPlace,
  handleOpenPopupEditProfile,
  handleOpenPopupAddNewPlace,
  handleClosePopupEditProfile,
  handleClosePopupAddNewPlace,
  handleClosePopupShowImage,
  handleEditProfileFormSubmit,
  handleAddNewPlaceFormSubmit,
};
