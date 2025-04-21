export default class UserInfo {
  constructor(nameSelector, aboutMeSelector) {
    this._nameSelector = nameSelector;
    this._aboutMeSelector = aboutMeSelector;
  }
  getUserInfo() {
    const content = document.querySelector(".content");
    const profileName = content.querySelector(".content__profile-name");
    const aboutMe = content.querySelector(".content__about-me");
    return { name: profileName.textContent, aboutMe: aboutMe.textContent };
  }
  setUserInfo() {
    const content = document.querySelector(".content");
    const profileName = content.querySelector(".content__profile-name");
    const aboutMe = content.querySelector(".content__about-me");
    profileName.textContent = this._nameSelector;
    aboutMe.textContent = this._aboutMeSelector;
  }
}
