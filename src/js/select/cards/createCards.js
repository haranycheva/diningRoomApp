export function createCard(card) {
  return `<li class="menu__item ${
    card.aviability === 'true' ? '' : 'menu__item_none'
  }">
  <div class="menu__thumb">
    <picture>
      <source
        srcset="
        ${card.pic4201xwebp} 1x,
        ${card.pic4202xwebp} 2x
        "
        type="image/webp"
        media="(max-width: 767.9px)"
      />
      <source
        srcset="        ${card.pic4201xjpg} 1x,
        ${card.pic4202xjpg} 2x"
        media="(max-width: 767.9px)"
      />
      <source
        srcset="
        ${card.pic4201xwebp} 1x,
        ${card.pic4202xwebp} 2x
        "
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcset="${card.pic4201xjpg} 1x,
        ${card.pic4202xjpg} 2x"
        media="(min-width: 768px)"
      />
      <img
        src="${card.pic4201xwebp}"
        alt="dish"
        class="menu__img"
      />
    </picture>
  </div>
  <div class="menu__wrap">
    <div class="menu__title-wrap">
    <h4 class="menu__card-title">${card.name}</h4>
    </div>
    <div class="menu__text-wrap">
      <p class="menu__including">${card.composition.slice(0, 45)}...</p>
      <div class="menu__cost-wrap">
        <p class="menu__price">${card.price} грн</p>
        <p class="menu__availability">${
          card.aviability === 'true' ? 'в наявн' : 'нема'
        }</p>
      </div>
  </div>
  </div>`;
}
