let burger = document.getElementById("block__burger");
   nav = document.getElementById("inner__nav");
burger.onclick = function(){
   burger.classList.toggle("active");
   nav.classList.toggle("active");
console.log(burger);
}
