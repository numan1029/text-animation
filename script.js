const element = document.querySelector('.typing');
const cursor = document.querySelector('.cursor');

let texts = [" A Developer", " A Designer", " A Student"];

let textIndex = 0;
let charIndex = 0;


function type() {
    if (charIndex < texts[textIndex].length) {
      if(!cursor.classList.add('stop')){cursor.classList.add('stop')};
        element.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
      cursor.classList.remove('stop');
        setTimeout(erase, 4500);
    }
}

function erase() {
    if (charIndex > 0) {
            if(!cursor.classList.add('stop')){cursor.classList.add('stop')};

        element.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 80);
    } else {
            cursor.classList.remove('stop');

        textIndex++;
        if (textIndex >= texts.length) {
            textIndex = 0;
        }
        setTimeout(type, 4000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1500);
})