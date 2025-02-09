let popup = document.querySelector(".popup");

let content = document.querySelector(".content");
let editButton = content.querySelector(".content__profile-edit-button");
let nameProfile = content.querySelector(".content__profile-name");
let aboutMe = content.querySelector(".content__about-me");

let form = document.querySelector(".form");
let closeButton = form.querySelector(".form__label-close-button");
let fieldName = form.querySelector(".form__field-name");
let fieldAboutMe = form.querySelector(".form__field-about-me");

function handleOpenPopup() {
  popup.classList.add("popup__open");
  fieldName.value = nameProfile.textContent;
  fieldAboutMe.value = aboutMe.textContent;
}

function handleClosePopup() {
  popup.classList.remove("popup__open");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = fieldName.value;
  aboutMe.textContent = fieldAboutMe.value;
  handleClosePopup();
}

editButton.addEventListener("click", handleOpenPopup);

closeButton.addEventListener("click", handleClosePopup);

form.addEventListener("submit", handleProfileFormSubmit);
