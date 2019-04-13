'use strict'

{
  const div = document.querySelector('div');

  button.addEventListener('mousemove', e => {
    div.textContent = `${e.clientX}:${e.clientY}`
  });
}