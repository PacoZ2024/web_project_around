import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

//const popupImage = new PopupWithImage("#popup__show-image", {
//  title: "Lago di Braies",
//  image:
//    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//});

//popupImage.open();
//popupImage._handleEscClose();
//popupImage.setEventListeners();

const popupEditProfile = new PopupWithForm(
  "#popup__edit-profile",
  function asigna(inputsValuesFormEditProfile) {
    const content = document.querySelector(".content");
    const profileName = content.querySelector(".content__profile-name");
    const aboutMe = content.querySelector(".content__about-me");
    profileName.textContent = inputsValuesFormEditProfile[0].value;
    aboutMe.textContent = inputsValuesFormEditProfile[1].value;
  }
);
popupEditProfile.open();
popupEditProfile._handleEscClose();
popupEditProfile.setEventListeners();

const content = document.querySelector(".content");
const EditProfileButton = content.querySelector(
  ".content__profile-edit-button"
);
const formEditProfile = document.forms.formEditProfile;
EditProfileButton.addEventListener("click", handleOpenPopupEditProfile);
function handleOpenPopupEditProfile() {
  const buttonElement = formEditProfile.querySelector(".form__button");
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove("form__button-disabled");
  popupEditProfile.open();
}
