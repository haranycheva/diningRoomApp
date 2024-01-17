import { refs } from "./refs.js";
export function toggleSelectList(){
    refs.selectList.classList.toggle("hide-select");
    // if(!refs.selectList.classList.contains("is-hidden")){
    //     refs.selectList.style.display = "block"
    // }
}