import { refs } from "./refs.js";
import { selectChoose } from "./selectChoose.js";
import { toggleSelectList } from "./toggleSelectList.js";
import { populateMarkup } from "./cards/populateMarkup.js";

// console.log(fetchTheCards("salads"));

import SimpleBar from 'simplebar'; 
import 'simplebar/dist/simplebar.css';
// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

new SimpleBar(refs.selectList, {
    autoHide: false,
});

populateMarkup();

refs.selectTitle.parentElement.addEventListener("click", toggleSelectList);
refs.selectItems.forEach(item => item.addEventListener("click", selectChoose));