'use strict'

{
  console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
  console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);

  document.querySelectorAll('input[type="checkbox"]')[0].checked =true;

  console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
  console.log(document.querySelectorAll('input[type="radio"]')[1].checked);

  document.querySelectorAll('input[type="radio"]')[1].checked = true;

  console.log(document.querySelectorAll('select > option')[0].checked);
  console.log(document.querySelectorAll('select > option')[1].checked);
  console.log(document.querySelectorAll('select > option')[2].checked);
  
  
}