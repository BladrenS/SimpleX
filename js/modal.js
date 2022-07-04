/*Modal*/
document.addEventListener('DOMContentLoaded', function() {
      let modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay = document.querySelector('#modal'),
      modalContent = document.querySelector('.modal__content'),
      closeButtons = document.querySelectorAll('.modal__close');
   modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
         modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         overlay.classList.add('active');
         modalContent.classList.add('active');
         setTimeout(function()
         {modalContent.style.transform = "scale(1)"}, 50);
         });
   });

   closeButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
      let parentModal = this.closest('.modal__content');
      setTimeout(function()
      {  parentModal.classList.remove('active');
         overlay.classList.remove('active');
         modalContent.classList.remove('active');}, 100);
         modalContent.style.transform = "scale(0)";
      });
   });
    overlay.addEventListener('click', function() {
      modalContent.style.transform = "scale(0)";
      setTimeout(function()
      {document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.modal__content.active').classList.remove('active');}, 100);      
    });
});
