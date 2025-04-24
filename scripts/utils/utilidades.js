const formEditProfile = document.forms.formEditProfile;
const fieldName = document.forms.formEditProfile.elements.fieldName;
const fieldAboutMe = document.forms.formEditProfile.elements.fieldAboutMe;
const buttonElement = formEditProfile.querySelector(".form__button");

function activeButtonEditProfile() {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove("form__button-disabled");
}

function showInputsFormEditProfile(data) {
  fieldName.value = data.name;
  fieldAboutMe.value = data.aboutMe;
}

export { activeButtonEditProfile, showInputsFormEditProfile };
