const content = document.querySelector(".content");
export const cardsContainer = document.querySelector(".content__images");
export const editProfileButton = content.querySelector(
  ".content__profile-edit-button"
);
export const addNewPlaceButton = content.querySelector(
  ".content__new-place-add-button"
);
export const editImageProfile = content.querySelector(".content__avatar-image");
export const editImageProfileContainer = content.querySelector(
  ".content__icon-edit-image-profile-container"
);

export const settingsFormEditProfile = {
  settings: {
    inputSelector: ".form__field",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button-disabled",
    inputErrorClass: "form__field_type_error",
    errorClass: "form__field-error_active",
  },
  formSelector: "#form__edit-profile",
};

export const settingsFormAddNewPlace = {
  settings: {
    inputSelector: ".form__field",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button-disabled",
    inputErrorClass: "form__field_type_error",
    errorClass: "form__field-error_active",
  },
  formSelector: "#form__add-new-place",
};

export const settingsFormEditImageProfile = {
  settings: {
    inputSelector: ".form__field",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button-disabled",
    inputErrorClass: "form__field_type_error",
    errorClass: "form__field-error_active",
  },
  formSelector: "#form__edit-image-profile",
};
