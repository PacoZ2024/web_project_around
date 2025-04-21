import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
//import PopupWithImage from "./PopupWithImage.js";

//Popup con imagen
//const popupImage = new PopupWithImage("#popup__show-image", {
//  title: "Lago di Braies",
//  image:
//    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//});

//popupImage.open();
//popupImage._handleEscClose();
//popupImage.setEventListeners();

//Popup Formulario Editar Perfil
const popupEditProfile = new PopupWithForm(
  "#popup__edit-profile",
  function asigna(inputsValuesFormEditProfile) {
    const dataUser = new UserInfo(
      inputsValuesFormEditProfile[0].value,
      inputsValuesFormEditProfile[1].value
    );
    dataUser.setUserInfo();
  }
);
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
