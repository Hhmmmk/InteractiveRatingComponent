const ratings = document.querySelector('.ratings');
const buttons = ratings.children;
const rating = document.querySelector('.rating');
const submitRate = document.querySelector('.submit');

function removeSelected() {
  for (j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove('selected');
  }
}




// Attempting to make this work instead of the one below but i don't know what i am doing wrong

// for (j = 0; j < buttons.length; j++) {
//   buttons[j].addEventListener('click', () => {
//     removeSelected();
//     buttons[j].classList.add('selected');
//     rate = buttons[j].innerHTML;
//     rating.innerHTML = rate;
//   })
// }




buttons[0].addEventListener('click', () => {
  removeSelected();
  buttons[0].classList.add('selected');
  rate = buttons[0].innerHTML;
  rating.innerHTML = rate;
})

buttons[1].addEventListener('click', () => {
    removeSelected();
    buttons[1].classList.add('selected');
    rate = buttons[1].innerHTML;
    rating.innerHTML = rate;
})

buttons[2].addEventListener('click', () => {
  removeSelected();
  buttons[2].classList.add('selected');
  rate = buttons[2].innerHTML;
  rating.innerHTML = rate;
})

buttons[3].addEventListener('click', () => {
  removeSelected();
  buttons[3].classList.add('selected');
  rate = buttons[3].innerHTML;
  rating.innerHTML = rate;
})

buttons[4].addEventListener('click', () => {
  removeSelected();
  buttons[4].classList.add('selected');
  rate = buttons[4].innerHTML;
  rating.innerHTML = rate;
})

submitRate.addEventListener('click', () => {
  const card2Hidden = document.querySelector('.hide');
  card2Hidden.classList.remove('hide');
})




// for (h = 0; h < buttons.length; h++) {
//   buttons[h].addEventListener('click', () => {
//     removeSelected();
//   })
//   buttons[h].classList.add('selected');
// }


