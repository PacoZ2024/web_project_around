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
    const form = this._selectorPopup.querySelector(".form");
    //Detector de eventos click para enviar la información del formulario
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._sender(this._getInputValues());
      super.close();
    });
  }
  close() {
    super.close();
    const form = this._selectorPopup.querySelector(".form");
    form.reset();
  }
}
