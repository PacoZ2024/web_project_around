import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup, sender) {
    super(selectorPopup);
    this._sender = sender;
  }

  setEventListeners() {
    super.setEventListeners();
    const closeButton = this._selectorPopup.querySelector(
      ".form__label-close-button"
    );

    closeButton.addEventListener("click", () => {
      this.close();
    });

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._sender();
      this.close();
    });
  }
}
