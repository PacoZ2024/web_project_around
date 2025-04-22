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
  //Método para cerrar el popup con la tecla Esc
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
  setEventListeners() {
    //Detector de eventos click para cerrar dando click fuera del popup
    this._selectorPopup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
