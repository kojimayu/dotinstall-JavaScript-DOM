'use strict'

{
  const ul = document.querySelector('ul'); // body

  // console.log(ul.parentNode); // body
  // console.log(ul.children); //li
  // console.log(ul.children[0]); //li
  
  for (let i = 0; i < ul.length; i++) {
    console.log(ul.children[i].textContent);
    
  }
}