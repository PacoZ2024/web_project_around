import Popup from "./Popup.js";

//Clase hija de Popup para visualizar una imagen
export default class PopupWithImage extends Popup {
  constructor(selectorPopup, data) {
    super(selectorPopup);
    this._image = data.image;
    this._title = data.title;
  }
  //Método open que añade la ruta de la imagen y el título de la misma
  open() {
    super.open();
    const image = this._selectorPopup.querySelector(".popup__image");
    const text = this._selectorPopup.querySelector(".popup__title-image");
    image.src = this._image;
    image.alt = this._title;
    text.textContent = this._title;
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
