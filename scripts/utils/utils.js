const formEditProfile = document.forms.formEditProfile;
const formAddNewPlace = document.forms.formAddNewPlace;
const formEditImageProfile = document.forms.formEditImageProfile;
const fieldName = document.forms.formEditProfile.elements.fieldName;
const fieldAboutMe = document.forms.formEditProfile.elements.fieldAboutMe;
const buttonSubmitFormEditProfile =
  formEditProfile.querySelector(".form__button");
const buttonSubmitFormAddNewPlace =
  formAddNewPlace.querySelector(".form__button");
const buttonSubmitFormEditImageProfile =
  formEditImageProfile.querySelector(".form__button");

function activeButtonEditProfile() {
  buttonSubmitFormEditProfile.textContent = "Guardar";
  buttonSubmitFormEditProfile.removeAttribute("disabled");
  buttonSubmitFormEditProfile.classList.remove("form__button-disabled");
}

function disabledButtonAddNewPlace() {
  buttonSubmitFormAddNewPlace.textContent = "Crear";
  buttonSubmitFormAddNewPlace.disabled = true;
  buttonSubmitFormAddNewPlace.classList.add("form__button-disabled");
}

function disabledButtonEditImageProfile() {
  buttonSubmitFormEditImageProfile.textContent = "Guardar";
  buttonSubmitFormEditImageProfile.disabled = true;
  buttonSubmitFormEditImageProfile.classList.add("form__button-disabled");
}

function showInputsFormEditProfile(data) {
  fieldName.value = data.name;
  fieldAboutMe.value = data.aboutMe;
}

function removeEventListener() {
  const closeButton = document.querySelector(".popup__label-close-button");
  closeButton.addEventListener("click", () => {
    const popupImage = document.querySelector(".popup__open");
    popupImage.classList.remove("popup__open");
  });
}

export {
  activeButtonEditProfile,
  showInputsFormEditProfile,
  disabledButtonAddNewPlace,
  disabledButtonEditImageProfile,
  removeEventListener,
};
