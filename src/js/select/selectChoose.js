import { refs } from "./refs.js";
import { toggleSelectList } from "./toggleSelectList";
export function selectChoose(){
    refs.selectTitle.innerText = this.innerText;
    toggleSelectList()
}