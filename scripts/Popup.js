//La clase Popup abre y cierra la ventana emergente.
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
      //const elementPopup = document.querySelector(".popup__open");
      if (evt.key === "Escape") {
        //elementPopup.classList.remove("popup__open");
        this.close();
      }
    });
  }
  setEventListeners() {
    const closeButton = this._selectorPopup.querySelector(
      ".form__label-close-button" //Modificar para imagen .popup__label-close-button
    );
    closeButton.addEventListener("click", () => {
      this.close();
    });
    this._selectorPopup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
