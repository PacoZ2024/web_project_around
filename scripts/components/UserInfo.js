export default class UserInfo {
  constructor(nameSelector, aboutMeSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._aboutMeSelector = document.querySelector(aboutMeSelector);
  }
  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      aboutMe: this._aboutMeSelector.textContent,
    };
  }
  setUserInfo(newName, newAboutMe) {
    this._nameSelector.textContent = newName;
    this._aboutMeSelector.textContent = newAboutMe;
  }
}
