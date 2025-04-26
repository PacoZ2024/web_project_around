import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, sender) {
    super(selectorPopup);
    this._sender = sender;
    this._form = this._selectorPopup.querySelector(".form");
  }
  _getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll(".form__field");
    return this._inputList;
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
      this._sender(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}
