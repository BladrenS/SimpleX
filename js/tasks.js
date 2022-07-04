document.addEventListener('DOMContentLoaded', function() {
   let inputButtons = document.querySelectorAll('.task-checkbox');
   inputButtons.forEach(function(item){
   item.addEventListener('click', function(e) {
      let inputId = this.getAttribute('data-input'),
      inputElem = document.querySelector('.tasks__item[data-input="' + inputId + '"]');
      inputElem.classList.toggle('active');
      });
   });
});