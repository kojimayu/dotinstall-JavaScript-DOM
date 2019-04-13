'use strict'

{
  const div = document.querySelector('div');

  // div.className = 'box border-pink';

  // div.classList.add('border-pink');
  // div.classList.remove('box');
  if (div.classList.contains('border-pink')) {
    div.classList.remove('box');
  } else {
    div.classList.add('bordr-pink');
  }
}