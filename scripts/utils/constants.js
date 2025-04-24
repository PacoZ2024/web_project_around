const content = document.querySelector(".content");
export const cardsContainer = document.querySelector(".content__images");
export const editProfileButton = content.querySelector(
  ".content__profile-edit-button"
);
export const addNewPlaceButton = content.querySelector(
  ".content__new-place-add-button"
);

//Datos para inicializar el perfil con seis cartas preestablecidas.
export const initialCards = [
  {
    title: "Valle de Yosemite",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//Configuración para la validación del formulario Editar Perfil
export const settingsFormEditProfile = {
  settings: {
    inputSelector: ".form__field",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button-disabled",
    inputErrorClass: "form__field_type_error",
    errorClass: "form__field-error_active",
  },
  formSelector: "#form__edit-profile",
};

//Configuración para la validación del formulario Agregar Nuevo Lugar
export const settingsFormAddNewPlace = {
  settings: {
    inputSelector: ".form__field",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button-disabled",
    inputErrorClass: "form__field_type_error",
    errorClass: "form__field-error_active",
  },
  formSelector: "#form__add-new-place",
};
