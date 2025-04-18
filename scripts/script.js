import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";

const popupImage = new PopupWithImage("#popup__show-image", {
  title: "Lago di Braies",
  image:
    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
});

popupImage.open();
popupImage._handleEscClose();
popupImage.setEventListeners();
