'use strict';

{
  const a = document.querySelector('a');
  const span = document.querySelector('span');

  a.addEventListener('click', e => {
    a.classList.add('hidden');
    span.classList.remove('hidden');
  });


}