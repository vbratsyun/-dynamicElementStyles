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
}

rangeBar.addEventListener('input', onRangeBarInput);