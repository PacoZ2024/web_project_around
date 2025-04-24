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

//FORMULARIO EDITAR PERFIL-----------------------------------------------------------------

//Objeto para la validación del formulario Editar Perfil
const formValidatorEditProfile = new FormValidator(
  settingsFormEditProfile.settings,
  settingsFormEditProfile.formSelector
);

//Método de validación para el formulario Editar Perfil
formValidatorEditProfile.enableValidation();

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
editProfileButton.addEventListener("click", () => {
  popupFormEditProfile.open();
});

//FORMULARIO AGREGAR NUEVO LUGAR-----------------------------------------------------------

//Creando un objeto para la validación del formulario Agregar Nuevo Lugar
const formValidatorAddNewPlace = new FormValidator(
  settingsFormAddNewPlace.settings,
  settingsFormAddNewPlace.formSelector
);

//Ejecutando la validación para el formulario Agregar Nuevo Lugar
formValidatorAddNewPlace.enableValidation();

//Objeto para el formulario Agregar Nuevo Lugar
const popupFormAddNewPlace = new PopupWithForm(
  "#popup__add-new-place",
  (inputsValues) => {
    const card = new Card(
      {
        title: inputsValues[0].value,
        image: inputsValues[1].value,
      },
      "#card-template"
    );
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
  }
);

//Método para cerrar el formulario Agregar Nuevo Lugar dando click fuera del formulario,
//con el botón "X" y con la tecla Esc; además envia la información al complementarla
//correctamente
popupFormAddNewPlace.setEventListeners();

//Detector de eventos click para abrir el formulario Agregar Nuevo Lugar
addNewPlaceButton.addEventListener("click", () => {
  popupFormAddNewPlace.open();
});
