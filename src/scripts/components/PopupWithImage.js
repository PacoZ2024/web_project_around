import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }

  open(link, title) {
    super.open();
    const image = this._selectorPopup.querySelector(".popup__image");
    const text = this._selectorPopup.querySelector(".popup__title-image");
    image.src = link;
    image.alt = title;
    text.textContent = title;
  }
}
