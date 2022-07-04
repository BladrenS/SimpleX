function priceColors() {
let colors = document.querySelectorAll('.item__stock');

colors.forEach(function(element) {
   if (element.innerHTML >=100){
      element.classList.remove('stock--orange');
      element.classList.remove('stock--red');
   }   
   else if (element.innerHTML >=50) {
      element.classList.add('stock--orange');
   }
   else {
      element.classList.add('stock--red');
   }
});
};
priceColors();


/*const finalGrade = (exam, projects) => {
   let result;
   if (exam > 90 || projects > 10) {
      return result = 100
   } else if (exam > 75 && projects >= 5) {
      return result = 90
   }  else if (exam > 50 && projects >= 2) {
      return result = 75     
   } else {
      return result = 0
   }
};
console.log(finalGrade(20, 2));*/

/*const reverse = (str) => {
   let result = "";
 for (let i = str.length - 1; i >= 0; i--) {
   result += str[i];
 }
 return result;
 };

console.log(reverse('Hello!'));*/

const solution = (str) => {
   let result = '';
   let arr = [...str];
   for (let i = 0; i < arr.length; i++) {
     if (i === 0) {
      arr[i] = arr[i].toUpperCase();
      };
     if (arr[i - 1] === ' ') {
      arr[i] = arr[i].toUpperCase();
     };
     result += arr[i];
   }
   return result;
 }
console.log(solution('hello, world and my friend'));
 
 //export default change;