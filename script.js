const selectColor = document.querySelector('.article__select-color');
const selectBackgroundColor = document.querySelector('.article__select-background');
const text = document.querySelector('.article__text');
const rangeBar = document.querySelector('.article__range-bar');


const onSelectColorChange = () => text.style.color= selectColor.value;

selectColor.addEventListener('change', onSelectColorChange);

const onSelectBackgroundColorChange = () => text.style.backgroundColor= selectBackgroundColor.value;

selectBackgroundColor.addEventListener('change', onSelectBackgroundColorChange);

const onRangeBarInput = () => {
   const rangeLabel = document.querySelector('.article__range-label output');
   rangeLabel.textContent = ` ${rangeBar.value}px`;
   text.style.fontSize = rangeLabel.textContent;

   //Динамическое изменение цветов при помощи JavaScript
   const value = (rangeBar.value-rangeBar.min)/(rangeBar.max-rangeBar.min)*100;
   rangeBar.style.background = `linear-gradient(to right, rgb(106, 90, 205, 0.8) ${value}%, rgb(255, 255, 255) ${value}%)`;
}

rangeBar.addEventListener('input', onRangeBarInput);
