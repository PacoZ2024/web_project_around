import Card from "./Card.js";
import FormValidator from "../components/FormValidator.js";
import {
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
} from "../utils/utils.js";

//Renderizando el perfil con las seis cartas
initialCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();
  document.querySelector(".content__images").prepend(cardElement);
});

//Configuración para la validación del formulario Editar Perfil
const settingsFormEditProfile = {
  settings: {
    inputSelector: ".form__field",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button-disabled",
    inputErrorClass: "form__field_type_error",
    errorClass: "form__field-error_active",
  },
  formSelector: "#form__edit-profile",
};

//Creando un objeto para la validación del formulario Editar Perfil
const formValidatorEditProfile = new FormValidator(
  settingsFormEditProfile.settings,
  settingsFormEditProfile.formSelector
);

//Ejecutando la validación para el formulario Editar Perfil
formValidatorEditProfile.enableValidation();

//Configuración para la validación del formulario Agregar Nuevo Lugar
const settingsFormAddNewPlace = {
  settings: {
    inputSelector: ".form__field",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button-disabled",
    inputErrorClass: "form__field_type_error",
    errorClass: "form__field-error_active",
  },
  formSelector: "#form__add-new-place",
};

//Creando un objeto para la validación del formulario Agregar Nuevo Lugar
const formValidatorAddNewPlace = new FormValidator(
  settingsFormAddNewPlace.settings,
  settingsFormAddNewPlace.formSelector
);

//Ejecutando la validación para el formulario Agregar Nuevo Lugar
formValidatorAddNewPlace.enableValidation();

//Constantes requeridas para los detectores de eventos
const popupShowImage = document.querySelector("#popup__show-image");
const closeShowImageButton = document.querySelector(
  ".popup__label-close-button"
);
const EditProfileButton = content.querySelector(
  ".content__profile-edit-button"
);
const addNewPlaceButton = content.querySelector(
  ".content__new-place-add-button"
);
const closeEditProfileButton = document.querySelector(
  "#form__close-edit-profile-button"
);
const closeAddNewPlaceButton = document.querySelector(
  "#form__close-add-new-place-button"
);

//Detectores de eventos click para cerrar el formulario y la vista de la imagen
//dando click fuera de ellos
popupEditProfile.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup")) {
    handleClosePopupEditProfile();
  }
});
popupAddNewPlace.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup")) {
    handleClosePopupAddNewPlace();
  }
});
popupShowImage.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup")) {
    handleClosePopupShowImage(evt);
  }
});

//Detector de eventos con la tecla ESC para cerrar los formularios y vista de la imagen
document.addEventListener("keydown", function (evt) {
  const elementPopup = document.querySelector(".popup__open");
  if (evt.key === "Escape") {
    if (elementPopup.id === "popup__edit-profile") {
      handleClosePopupEditProfile();
    } else if (elementPopup.id === "popup__add-new-place") {
      handleClosePopupAddNewPlace();
    } else if (elementPopup.id === "popup__show-image") {
      elementPopup.classList.remove("popup__open");
    }
  }
});

//Detectores de eventos click para abrir formularios
EditProfileButton.addEventListener("click", handleOpenPopupEditProfile);

addNewPlaceButton.addEventListener("click", handleOpenPopupAddNewPlace);

//Detectores de eventos click para cerrar los formularios y la vista de imagen
//con el boton cerrar
closeEditProfileButton.addEventListener("click", handleClosePopupEditProfile);

closeAddNewPlaceButton.addEventListener("click", handleClosePopupAddNewPlace);

closeShowImageButton.addEventListener("click", handleClosePopupShowImage);

//Detectores de eventos click para enviar la información de los formularios
formEditProfile.addEventListener("submit", handleEditProfileFormSubmit);

formAddNewPlace.addEventListener("submit", handleAddNewPlaceFormSubmit);

export { formValidatorEditProfile, formValidatorAddNewPlace };
