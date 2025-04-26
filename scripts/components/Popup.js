export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);
  }
  open() {
    this._selectorPopup.classList.add("popup__open");
  }
  close() {
    this._selectorPopup.classList.remove("popup__open");
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
  setEventListeners() {
    this._handleEscClose();

    this._selectorPopup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
