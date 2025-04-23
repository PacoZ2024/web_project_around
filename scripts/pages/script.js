import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { initialCards, EditProfileButton } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//Objeto para renderizar el perfil con las seis cartas iniciales
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template");
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".content__images"
);

//Método para renderizar las cartas iniciales
cardSection.renderItems();

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

//------------------------------------------------------------------------------------------------------

//Objeto para la información del usuario
const dataUser = new UserInfo(".content__profile-name", ".content__about-me");

//Objeto para el formulario Editar Perfil
const popupFormEditProfile = new PopupWithForm(
  "#popup__edit-profile",
  (inputsValues) => {
    dataUser.setUserInfo(inputsValues[0].value, inputsValues[1].value);
  }
);

//Método para cerrar el formulario Editar Perfil dando click fuera del formulario, con el
//botón "X" y con la tecla Esc; además envia la información al complementarla correctamente
popupFormEditProfile.setEventListeners();

//Detector de eventos click para abrir el formulario Editar Perfil
EditProfileButton.addEventListener("click", () => {
  popupFormEditProfile.open();
});
