"use strict"
/*Accrodion*/
document.querySelector('.sale__accrodion').addEventListener('click', () => {
   document.querySelector('.sale').classList.toggle('open');
   document.querySelector('.sale__accrodion').classList.toggle('open');
 });

 document.querySelector('.member__accrodion').addEventListener('click', () => {
   document.querySelector('.member').classList.toggle('open');
   document.querySelector('.member__accrodion').classList.toggle('open');
 });