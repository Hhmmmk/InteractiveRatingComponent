const ratings = document.querySelector('.ratings');
const buttons = ratings.children;
const rating = document.querySelector('.rating');
const submitRate = document.querySelector('.submit');

function removeSelected() {
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove('selected');
  }
}


for (let j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener('click', () => {
    removeSelected();
    buttons[j].classList.add('selected');
    rate = buttons[j].innerHTML;
    rating.innerHTML = rate;
  })
}


submitRate.addEventListener('click', () => {
  const card2Hidden = document.querySelector('.hide');
  card2Hidden.classList.remove('hide');
})
