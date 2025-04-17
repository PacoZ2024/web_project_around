import Popup from "./Popup.js";

const buttonEditProfile = new Popup("#popup__edit-profile");

buttonEditProfile.open();
buttonEditProfile._handleEscClose();
buttonEditProfile.setEventListeners();
