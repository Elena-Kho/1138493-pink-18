let reviews = document.querySelector('.reviews__slider');
let list = reviews.querySelector('.reviews__list');
let item = list.querySelector('.reviews__item');
let items = list.querySelectorAll('.reviews__item');
let itemWidth = parseInt(window.getComputedStyle(item).width);
let stopNext = -itemWidth * (items.length - 1);
let itemPosition = 0;
let buttonPrev = reviews.querySelector('.reviews__arrows-prev');
let buttonNext = reviews.querySelector('.reviews__arrows-next');
let buttons = reviews.querySelectorAll('.slider-controls__button');


buttonPrev.addEventListener('click', function(event) {
  if (itemPosition < 0) {
    itemPosition += itemWidth;
  } else {
    itemPosition = 0;
  }
  list.style.marginLeft = itemPosition + 'px';
});


buttonNext.addEventListener('click', function(event) {
  if (itemPosition > stopNext) {
  itemPosition -= itemWidth;
  } else {
    itemPosition = stopNext;
  }
  list.style.marginLeft = itemPosition + 'px';
});

for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let slide = items[i];

  button.addEventListener("click", function (evt) {
    for(let j = 0; j < items.length; j++) {
      let slide = items[j];
      slide.style.display = 'none';
    };
    for(let k = 0; k < buttons.length; k++) {
      let button = buttons[k];
      button.classList.remove('slider-controls__button--active');
    };
    slide.style.display = 'block';
    button.classList.add('slider-controls__button--active');
  })
}

