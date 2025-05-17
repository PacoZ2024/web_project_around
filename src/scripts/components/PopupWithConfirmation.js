import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._form = this._selectorPopup.querySelector(".form");
  }

  submitAction(objectApi) {
    this._setSubmitAction = objectApi;
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
      this._setSubmitAction.api(
        this._setSubmitAction.id,
        this._setSubmitAction.element
      );
      this.close();
    });
  }
}
