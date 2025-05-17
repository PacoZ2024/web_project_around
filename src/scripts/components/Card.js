export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleDeleteLiked,
    handleIsLiked,
    handleDeleteCard
  ) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteLiked = handleDeleteLiked;
    this._handleIsLiked = handleIsLiked;
    this._handleDeleteCard = handleDeleteCard;
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
    this._element.querySelector(".content__image").src = this._link;
    this._element.querySelector(".content__image").alt = this._name;
    this._element.querySelector(".content__image-title").textContent =
      this._name;
    this._setEventListeners();
    if (this._isLiked) {
      this._element
        .querySelector(".content__like-button-label")
        .classList.add("content__like-button-label-active");
    }
    return this._element;
  }
  _setEventListeners() {
    this._element
      .querySelector(".content__like-button-label")
      .addEventListener("click", () => {
        if (this._isLiked) {
          this._handleDeleteLiked(this._id, this._element);
        } else {
          this._handleIsLiked(this._id, this._element);
        }
      });

    this._element
      .querySelector(".content__delete-button-label")
      .addEventListener("click", () => {
        this._handleDeleteCard(this._id, this._element);
      });

    this._element
      .querySelector(".content__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }
}
