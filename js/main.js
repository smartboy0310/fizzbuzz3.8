var elForm = document.querySelector('.fizzbuzz-form');
var elInputNumber = document.querySelector('.fizzbuzz-form__input');
var elResault = document.querySelector('.fizzbuzz-form__resault');


var fizzNumber = 3;
var buzzNumber = 5;
var resault = ' ';

function fizzbuzz (inputNumber) {

   if (inputNumber % (fizzNumber * buzzNumber) === 0) {
      resault = 'This is fizzbuzz number';
   } 
    else if (inputNumber % buzzNumber === 0) {
      resault = 'This is buzz number';
   } 
   else if (inputNumber % fizzNumber === 0) {
      resault = 'This is fizz number';
   }
   else {
      resault = 'This isnot fizzbuzz number';
   }
   
   return resault;
}
elForm.addEventListener('submit', function (evt) {
   evt.preventDefault();

   var userNumber = Number(elInputNumber.value.trim());
   elResault.textContent = fizzbuzz(userNumber);
     
})
