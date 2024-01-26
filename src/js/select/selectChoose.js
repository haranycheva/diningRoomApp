import { refs } from "./refs.js";
import { toggleSelectList } from "./toggleSelectList";
import { addCards } from "./cards/addCards.js";

export function selectChoose(){
    refs.selectTitle.innerText = this.innerText;
    toggleSelectList()
    addCards(this.dataset.type);
}