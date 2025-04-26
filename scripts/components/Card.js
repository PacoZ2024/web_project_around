export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.title;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._element
      .querySelector(".content__like-button-label")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    this._element
      .querySelector(".content__delete-button-label")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._element
      .querySelector(".content__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeButton() {
    this._element
      .querySelector(".content__like-button-label")
      .classList.toggle("content__like-button-label-active");
  }
}
