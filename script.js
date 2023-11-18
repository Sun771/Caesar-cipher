// Encryption and Decryption
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const key = document.querySelector('#key');

const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
                    'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                    'o', 'p', 'q', 'r', 's', 't', 'u', 
                    'v', 'w', 'x', 'y', 'z'] 

let newText = '';

btnEncrypt.addEventListener('click', () => {
  for (let letter of textArea.value) {
    const textArea = document.getElementById('textarea');
    const keyValue = Number(key.value);
    letter = letter.toLowerCase();
    if (!listLetters.includes(letter)){
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
/* /Default textarea size. /Smooth animation for textarea when pressing 
 the button default texearea size */

// Clear all
const btnClearAll = document.getElementById('btn-clear-all');

btnClearAll.addEventListener('click', () => {
  textArea.value = '';
  key.value = '';
});
// /Clear all

// Size + and -
const containerForAllContent = document.getElementById('container-for-all-content');
const btnSizePlus = document.getElementById('btn-textarea-size-plus');
const btnSizeMinus = document.getElementById('btn-textarea-size-minus')

// Size +
btnSizePlus.addEventListener('click', () => {
  containerForAllContent.style.transform = 'scale(120%)';
});
// /Size +

// Size -
btnSizeMinus.addEventListener('click', () => {
  containerForAllContent.style.transform = 'scale(100%)';
});
// /Size -
// Size + and -