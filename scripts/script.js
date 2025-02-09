let content = document.querySelector(".content");
let form = document.querySelector(".form");
let popup = document.querySelector(".popup");

let editButton = content.querySelector(".content__profile-edit-button");
let nameProfile = content.querySelector(".content__profile-name");
let aboutMe = content.querySelector(".content__about-me");

let closeButton = form.querySelector(".form__label-close-button");
let fieldName = form.querySelector(".form__field-name");
let fieldAboutMe = form.querySelector(".form__field-about-me");

editButton.addEventListener("click", function () {
  popup.classList.add("popup__open");
  fieldName.value = nameProfile.textContent;
  fieldAboutMe.value = aboutMe.textContent;
});

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup__open");
});
