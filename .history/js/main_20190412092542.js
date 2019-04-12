'use strict'

{
  document.querySelector('h1').textContent = 'H1!';

  document.querySelectorAll('li').forEach(li => {
    li.textContent = 'li!';
  });
}