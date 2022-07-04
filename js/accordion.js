"use strict"
/*Accrodion*/
document.querySelector('.sale__accrodion').addEventListener('click', () => {
   document.querySelector('.sale').classList.toggle('open');
   document.querySelector('.sale__accrodion').classList.toggle('open');
 });