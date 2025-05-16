import Api from "../components/Api.js";

export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._isLiked = data.isLiked;
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
    const api = new Api({
      baseUrl: "https://around-api.es.tripleten-services.com/v1",
      headers: {
        authorization: "c7ddeb73-151f-41a7-9f67-d93995416067",
        "Content-Type": "application/json",
      },
    });
    api
      .deleteCard(this._id)
      .then((result) => {
        this._element.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _handleLikeButton() {
    const api = new Api({
      baseUrl: "https://around-api.es.tripleten-services.com/v1",
      headers: {
        authorization: "c7ddeb73-151f-41a7-9f67-d93995416067",
        "Content-Type": "application/json",
      },
    });
    if (this._isLiked) {
      api
        .deleteLiked(this._id)
        .then((result) => {
          this._isLiked = result.isLiked;
          this._element
            .querySelector(".content__like-button-label")
            .classList.remove("content__like-button-label-active");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .isLiked(this._id)
        .then((result) => {
          this._isLiked = result.isLiked;
          this._element
            .querySelector(".content__like-button-label")
            .classList.add("content__like-button-label-active");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
