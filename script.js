// Encryption and Decryption
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const key = document.getElementById('key');

// Validation of key
key.addEventListener('input', function(event) {
  let inputValue = event.target.value;
  inputValue = inputValue.replace(/[^0-9]/g, '');
  event.target.value = inputValue;
});


const listLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

let newText = '';

btnEncrypt.addEventListener('click', () => {
  for (let letter of textArea.value) {
    const textArea = document.getElementById('textarea');
    const keyValue = Number(key.value);
    letter = letter.toLowerCase();
    if (!listLetters.includes(letter)){
      if (letter === ' ') {
        newText += "'"
      }
      continue
    }
    
    const indexLetter = listLetters.findIndex((item) => item === letter);
    let indexNewLetter = indexLetter + keyValue;

    if(indexNewLetter > 25) {
      indexNewLetter = indexNewLetter % 26;
    }
    newText += listLetters[indexNewLetter];
    textArea.value = newText;
    
  }
  newText = '';
});

btnDecrypt.addEventListener('click', () => {
  const textArea = document.getElementById('textarea');
  const keyValue = Number(key.value);
  for (const letter of textArea.value) {
    if (!listLetters.includes(letter)){
      if (letter === "'") {
        newText += ' '
      }
      continue
    }
    
    const indexLetter = listLetters.findIndex((item) => item === letter);
    let indexNewLetter = indexLetter - keyValue;

    while (indexNewLetter < 0) {
      indexNewLetter += 26;
    }

    newText += listLetters[indexNewLetter % 26];
    textArea.value = newText;
  }
  newText = '';
});
// /Encryption and Decryption

/* Default textarea size. Smooth animation for textarea when pressing 
 the button default texearea size */
let defaultWidth, defaultHeight;
const textArea = document.getElementById('textarea');
const defaultStyle = getComputedStyle(textArea);
defaultWidth = defaultStyle.getPropertyValue('width');
defaultHeight = defaultStyle.getPropertyValue('height');
const btnDefaultTextareaSize = document.getElementById('btn-default-textarea-size');

btnDefaultTextareaSize.addEventListener('click', () => {
  textArea.classList.add('transition-for-closing-textarea')
  textArea.style.width = defaultWidth;
  textArea.style.height = defaultHeight;
  setTimeout(() => {
    textArea.classList.remove('transition-for-closing-textarea')
  }, 400);
});
// /Default textarea size.

// Clear all
const btnClearAll = document.getElementById('btn-clear-all');

btnClearAll.addEventListener('click', () => {
  textArea.value = '';
  key.value = '';
});

// Sizes
const containerForAllContent = document.getElementById('container-for-all-content');
const btnSizePlus = document.getElementById('btn-textarea-size-plus');
const btnSizeMinus = document.getElementById('btn-textarea-size-minus')
const btnSizeDefault = document.getElementById('btn-textarea-size-default')



// Size +
btnSizePlus.addEventListener('click', () => {
  containerForAllContent.style.transform = 'scale(120%)';
});

// Size default
btnSizeDefault.addEventListener('click', () => {
  containerForAllContent.style.transform = 'scale(100%)';
});

// Size -
btnSizeMinus.addEventListener('click', () => {
  containerForAllContent.style.transform = 'scale(80%)';
});

// /Sizes

