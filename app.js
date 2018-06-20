//Setting Variables Needed
const win = window;
const documentBg = document.querySelector('.bg');
const showModal = document.querySelector('.quote__showModal');
const closeModal = document.querySelector('.quote__closeModal');
const quoteInput = document.querySelector('.quote__input');
const quoteDisplay = document.querySelector('#quote__display');
const submitQuote = document.querySelector('.quote__form');
const quoteModal = document.querySelector('#quote__modal');
const getRandomQuote = document.querySelector('#quote__getRandomQuote');
let quotesArr = [
  'It does not do to leave a live dragon out of your calculations, if you live near him.',
  'Never look backwards or you’ll fall down the stairs.',
  'If you only do what you can do you will never be more than what you are now.',
  'You don’t know where you’re going unless you know where you’ve been.',
  'In order to fly, all one must do is simply miss the ground.'
];

let shownArrays = [];
let counter = 0;
let randomQuote;
let colour = '';
let randomBackground;

//Adding a Quote
//Enforced abit of form validation
submitQuote.addEventListener('submit', function(e) {
  e.preventDefault();
  if (quoteInput.value === '' || /^[\s\d]/.test(quoteInput.value)) {
    quoteInput.value = '';
    alert('Quote cannot be empty or startwith a blank space');
    quoteInput.focus();
  } else {
    quotesArr.push(quoteInput.value);
    quoteInput.value = '';
    alert('Quote Added');
    quoteInput.focus();
  }
});

getRandomQuote.addEventListener('click', function() {
  getQuote();
});

win.addEventListener('load', function() {
  getQuote();
});

showModal.addEventListener('click', function(e) {
  quoteModal.style.display = 'flex';
  quoteInput.focus();
});

closeModal.addEventListener('click', function(e) {
  quoteModal.style.display = 'none';
});

function rgbRandom() {
  return Math.floor(Math.random() * 256);
}

function backgroundChange() {
  randomBackground = Math.floor(Math.random() * 5);
  documentBg.style.backgroundImage = 'url(img/' + randomBackground + '.jpg)';
}

/* 
  This function checks to see if counter strictly equals our quotesArr's length
*/
function trackUsed() {
  counter += 1;
  if (counter === quotesArr.length) {
    shownArrays.length = 0;
    counter = 0;
  }
}

/* 
  It ensures that quotes are not shown twice untill all quotes has been shone.
*/
function getQuote() {
  randomQuote = Math.floor(Math.random() * quotesArr.length);
  if (shownArrays.indexOf(randomQuote) === -1) {
    shownArrays.push(randomQuote);
    trackUsed();
    backgroundChange();
    quoteDisplay.innerHTML = quotesArr[randomQuote];
  } else {
    while (shownArrays.indexOf(randomQuote) > -1) {
      randomQuote = Math.floor(Math.random() * quotesArr.length);
    }
    shownArrays.push(randomQuote);
    trackUsed();
    backgroundChange();
    quoteDisplay.innerHTML = quotesArr[randomQuote];
  }
}
