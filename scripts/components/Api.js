export default class Api {
  constructor(options) {
    this.options = options;
  }
  getInitialCards() {
    return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
      headers: { authorization: "c7ddeb73-151f-41a7-9f67-d93995416067" },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
