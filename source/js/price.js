let price = document.querySelector('.price');
let priceTable = price.querySelector('.price__table');
let priceButtons = price.querySelectorAll('.slider-controls__button');

for(let i = 0; i < priceButtons.length; i++) {
  let button = priceButtons[i];

  button.addEventListener("click", function (evt) {
    priceTable.style.left = -i * parseInt(window.getComputedStyle(priceTable).width) / priceButtons.length + 'px';
    for(let i = 0; i < priceButtons.length; i++) {
      let button = priceButtons[i];
      button.classList.remove('slider-controls__button--active');
    };
    button.classList.add('slider-controls__button--active');
  })
}
