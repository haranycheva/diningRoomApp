import { refs } from "../refs.js";
import { fetchTheCards } from "./fetch.js";
import { createCard } from "./createCards.js";
const filterList = ["firstCourses", "secondCourses", "drinks", "salads"]

export async function populateMarkup(){
    const data = [];
    for(const i of filterList){
        const filterData = await fetchTheCards(i)
        data.push(...filterData)
    }
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