import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, sender) {
    super(selectorPopup);
    this._sender = sender;
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
    const form = this._selectorPopup.querySelector(".form");
    //Detector de eventos click para cerrar con el botón X
    closeButton.addEventListener("click", () => {
      this.close();
    });
    //Detector de eventos click para enviar la información del formulario
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._sender(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    const form = this._selectorPopup.querySelector(".form");
    form.reset();
  }
}
