const popupEditProfile = document.querySelector("#popup__edit-profile");
const popupAddNewPlace = document.querySelector("#popup__add-new-place");

const content = document.querySelector(".content");
const profileName = content.querySelector(".content__profile-name");
const aboutMe = content.querySelector(".content__about-me");
const EditProfileButton = content.querySelector(
  ".content__profile-edit-button"
);
const addNewPlaceButton = content.querySelector(
  ".content__new-place-add-button"
);

const form = document.querySelector(".form");
const fieldName = form.querySelector(".form__field-name");
const fieldAboutMe = form.querySelector(".form__field-about-me");
const closeEditProfileButton = form.querySelector(
  "#form__close-edit-profile-button"
);
const fieldTitle = document.querySelector(".form__field-title");
const fieldLinkImage = document.querySelector(".form__field-link-image");
const closeAddNewPlaceButton = document.querySelector(
  "#form__close-add-new-place-button"
);

const closeShowImageButton = document.querySelector(
  ".popup__label-close-button"
);

const formEditProfile = document.querySelector("#form__edit-profile");
const formAddNewPlace = document.querySelector("#form__add-new-place");

const cardsContainer = document.querySelector(".content__images");
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
  LikeButton.addEventListener("click", function () {
    LikeButton.classList.toggle("content__like-button-label-active");
  });
  DeleteButton.addEventListener("click", function () {
    cardElement.remove();
  });
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

function handleOpenPopupEditProfile() {
  popupEditProfile.classList.add("popup__open");
  fieldName.value = profileName.textContent;
  fieldAboutMe.value = aboutMe.textContent;
}

function handleOpenPopupAddNewPlace() {
  popupAddNewPlace.classList.add("popup__open");
}

function handleClosePopupEditProfile() {
  popupEditProfile.classList.remove("popup__open");
}

function handleClosePopupAddNewPlace() {
  popupAddNewPlace.classList.remove("popup__open");
}

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

function handleClosePopupShowImage(evt) {
  console.log(evt.target.closest(".popup").classList.remove("popup__open"));
}

initialCards.forEach((card) => {
  cardsContainer.append(createCard(card));
});

EditProfileButton.addEventListener("click", handleOpenPopupEditProfile);

closeEditProfileButton.addEventListener("click", handleClosePopupEditProfile);

formEditProfile.addEventListener("submit", handleEditProfileFormSubmit);

addNewPlaceButton.addEventListener("click", handleOpenPopupAddNewPlace);

closeAddNewPlaceButton.addEventListener("click", handleClosePopupAddNewPlace);

formAddNewPlace.addEventListener("submit", handleAddNewPlaceFormSubmit);

closeShowImageButton.addEventListener("click", handleClosePopupShowImage);
