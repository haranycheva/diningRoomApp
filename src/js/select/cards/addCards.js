import { fetchTheCards } from "./fetch.js"
import { createCard } from "./createCards.js"
import { refs } from "../refs.js";

const ERROR = `<p class="error-text">Opppps....  Something went wrong :(</p>`;

export async function addCards(filter){
  const data = await fetchTheCards(filter)
  refs.cardsList.innerHTML = "";
  if (!data) {
    refs.cardsList.insertAdjacentHTML("beforeend", ERROR);
    return;
  }
  let cardsToAdd = "";
  for (const i of data) {
    cardsToAdd += createCard(i);
  }
  refs.cardsList.insertAdjacentHTML("beforeend", cardsToAdd);
}

