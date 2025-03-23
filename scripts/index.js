import { resetValidation } from "./validate.js";

const popupEditProfile = document.querySelector("#popup__edit-profile");
const popupAddNewPlace = document.querySelector("#popup__add-new-place");
const popupShowImage = document.querySelector("#popup__show-image");
const closeShowImageButton = document.querySelector(
  ".popup__label-close-button"
);

const content = document.querySelector(".content");
const profileName = content.querySelector(".content__profile-name");
const aboutMe = content.querySelector(".content__about-me");
const EditProfileButton = content.querySelector(
  ".content__profile-edit-button"
);
const addNewPlaceButton = content.querySelector(
  ".content__new-place-add-button"
);
const cardsContainer = document.querySelector(".content__images");

const formEditProfile = document.forms.formEditProfile;
const formAddNewPlace = document.forms.formAddNewPlace;
const fieldName = document.forms.formEditProfile.elements.fieldName;
const fieldAboutMe = document.forms.formEditProfile.elements.fieldAboutMe;
const closeEditProfileButton = document.querySelector(
  "#form__close-edit-profile-button"
);
const fieldTitle = document.forms.formAddNewPlace.elements.fieldTitle;
const fieldLinkImage = document.forms.formAddNewPlace.elements.fieldLinkImage;
const closeAddNewPlaceButton = document.querySelector(
  "#form__close-add-new-place-button"
);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//Crea una carta
function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".content__card")
    .cloneNode(true);
  const LikeButton = cardElement.querySelector(".content__like-button-label");
  const DeleteButton = cardElement.querySelector(
    ".content__delete-button-label"
  );
  const cardImage = cardElement.querySelector(".content__image");
  cardElement.querySelector(".content__image-title").textContent = card.name;
  cardElement.querySelector(".content__image").src = card.link;
  cardElement.querySelector(".content__image").alt = card.name;

  //Detector de evento click para el activar/desactivar el botón Like de la carta
  LikeButton.addEventListener("click", function () {
    LikeButton.classList.toggle("content__like-button-label-active");
  });

  //Detector de evento click para eliminar la carta
  DeleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  //Detector de evento click para mostrar imagen
  cardImage.addEventListener("click", function () {
    const popupImage = document.querySelector("#popup__show-image");
    const image = popupImage.querySelector(".popup__image");
    const text = popupImage.querySelector(".popup__title-image");
    popupImage.classList.add("popup__open");
    image.src = card.link;
    image.alt = card.name;
    text.textContent = card.name;
  });
  return cardElement;
}

//Manejadores de eventos para abrir formularios
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

//Manejadores de eventos para cerrar formularios y la vista de la imagen
function handleClosePopupEditProfile() {
  popupEditProfile.classList.remove("popup__open");
  resetValidation(formEditProfile);
}

function handleClosePopupAddNewPlace() {
  popupAddNewPlace.classList.remove("popup__open");
  resetValidation(formAddNewPlace);
  formAddNewPlace.reset();
}

function handleClosePopupShowImage(evt) {
  evt.target.closest(".popup").classList.remove("popup__open");
}

//Manejadores de eventos para enviar la información del formulario
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = fieldName.value;
  aboutMe.textContent = fieldAboutMe.value;
  handleClosePopupEditProfile();
}

function handleAddNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const card = { name: fieldTitle.value, link: fieldLinkImage.value };
  cardsContainer.prepend(createCard(card));
  fieldTitle.value = "";
  fieldLinkImage.value = "";
  handleClosePopupAddNewPlace();
}

//Detectores de eventos click en el exterior del formulario para cerrarlo
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

//Detector de eventos tecla ESC para cerrar formularios y vista de la imagen
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

//Detectores de eventos click para cerrar formularios y vista de imagen con el boton cerrar
closeEditProfileButton.addEventListener("click", handleClosePopupEditProfile);

closeAddNewPlaceButton.addEventListener("click", handleClosePopupAddNewPlace);

closeShowImageButton.addEventListener("click", handleClosePopupShowImage);

//Detectores de eventos click para enviar información del formulario
formEditProfile.addEventListener("submit", handleEditProfileFormSubmit);

formAddNewPlace.addEventListener("submit", handleAddNewPlaceFormSubmit);

//Inicialización de las cartas
initialCards.forEach((card) => {
  cardsContainer.append(createCard(card));
});
