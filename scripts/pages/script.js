import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { initialCards } from "../utils/constants.js";

//Renderizando el perfil de inicio con las seis cartas
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template");
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".content__images"
);

cardSection.renderItems();
