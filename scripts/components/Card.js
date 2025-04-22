import PopupWithImage from "./PopupWithImage.js";

//Clase Card crea una carta para renderizar cuenta con métodos para dar like, eliminar
//o mostrar su vista previa; así como para obtener la plantilla del código HTML.
export default class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".content__image").src = this._image;
    this._element.querySelector(".content__image").alt = this._title;
    this._element.querySelector(".content__image-title").textContent =
      this._title;
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    //Detector de eventos click para activar/desactivar el botón Like de c/carta
    this._element
      .querySelector(".content__like-button-label")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    //Detector de eventos click para eliminar una carta
    this._element
      .querySelector(".content__delete-button-label")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    //Detector de eventos click para mostrar la imagen de una carta
    this._element
      .querySelector(".content__image")
      .addEventListener("click", () => {
        this._handleShowImage();
      });
  }
  //Manejador de eventos para mostrar una carta
  _handleShowImage() {
    const popupImage = document.querySelector("#popup__show-image");
    const image = popupImage.querySelector(".popup__image");
    const text = popupImage.querySelector(".popup__title-image");
    popupImage.classList.add("popup__open");
    image.src = this._image;
    image.alt = this._title;
    text.textContent = this._title;
  }
  //Manejador de eventos para eliminar una carta
  _handleDeleteCard() {
    this._element.remove();
  }
  //Manejador de eventos para dar Like a una carta
  _handleLikeButton() {
    this._element
      .querySelector(".content__like-button-label")
      .classList.toggle("content__like-button-label-active");
  }
}
