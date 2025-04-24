const formEditProfile = document.forms.formEditProfile;
const formAddNewPlace = document.forms.formAddNewPlace;
const fieldName = document.forms.formEditProfile.elements.fieldName;
const fieldAboutMe = document.forms.formEditProfile.elements.fieldAboutMe;
const buttonSubmitFormEditProfile =
  formEditProfile.querySelector(".form__button");
const buttonSubmitFormAddNewPlace =
  formAddNewPlace.querySelector(".form__button");

function activeButtonEditProfile() {
  buttonSubmitFormEditProfile.removeAttribute("disabled");
  buttonSubmitFormEditProfile.classList.remove("form__button-disabled");
}

function disabledButtonAddNewPlace() {
  buttonSubmitFormAddNewPlace.disabled = true;
  buttonSubmitFormAddNewPlace.classList.add("form__button-disabled");
}

function showInputsFormEditProfile(data) {
  fieldName.value = data.name;
  fieldAboutMe.value = data.aboutMe;
}

export {
  activeButtonEditProfile,
  showInputsFormEditProfile,
  disabledButtonAddNewPlace,
};
