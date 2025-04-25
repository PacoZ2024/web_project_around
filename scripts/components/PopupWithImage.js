import Popup from "./Popup.js";

//Clase hija de Popup para visualizar una imagen
export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }
  //Método open que añade la ruta de la imagen y el título de la misma
  open(link, title) {
    super.open();
    const image = this._selectorPopup.querySelector(".popup__image");
    const text = this._selectorPopup.querySelector(".popup__title-image");
    image.src = link;
    image.alt = title;
    text.textContent = title;
  }
  setEventListeners() {
    super.setEventListeners();
    const closeButton = this._selectorPopup.querySelector(
      ".popup__label-close-button"
    );
    //Detector de eventos click para cerrar con el botón X
    closeButton.addEventListener("click", () => {
      super.close();
    });
  }
}
