//Clase FormValidator su función es validar el formulario de acuerdo con las especificaciones
//de cada entrada, también cuenta con el método resetValidation para resetearlo después de
//cerrarlo o enviar la información.
export default class FormValidator {
  constructor(settings, formSelector) {
    this._settings = settings;
    this._formSelector = document.querySelector(formSelector);
  }
  enableValidation() {
    this._formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
  _setEventListeners() {
    const inputList = Array.from(
      this._formSelector.querySelectorAll(this._settings.inputSelector)
    );
    this._toggleButtonState();
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _toggleButtonState() {
    const buttonElement = this._formSelector.querySelector(
      this._settings.submitButtonSelector
    );
    if (this._hasInvalidInput()) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }
  _hasInvalidInput() {
    const inputList = Array.from(
      this._formSelector.querySelectorAll(this._settings.inputSelector)
    );
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formSelector.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }
  _hideInputError(inputElement) {
    const errorElement = this._formSelector.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = "";
  }
  resetValidation() {
    const inputList = Array.from(
      this._formSelector.querySelectorAll(this._settings.inputSelector)
    );
    inputList.forEach((inputElement) => {
      const errorElement = this._formSelector.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.classList.remove(this._settings.errorClass);
      errorElement.textContent = "";
    });
  }
}
