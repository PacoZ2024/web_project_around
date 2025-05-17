import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._form = this._selectorPopup.querySelector(".form");
  }

  setEventListeners() {
    super.setEventListeners();
    const closeButton = this._selectorPopup.querySelector(
      ".form__label-close-button"
    );

    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
