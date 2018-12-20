// 1. Verbal Questions
// Arguments and parameters are different names for the same thing, and are also called inputs. Though not required
// when declaring a function, they are defined when the function is invoked.

// 2. console.log will just print the result of your function into the console so that you can verify its working. 
// Return may or may not return a value to the programmer, but it also affects the control flow of the code, while 
// console.log doesn't.

// 3. We can use the returned value elsewhere in our program instead of it merely being logged in the console.


// PART 2. PALINDROME AGAIN

function checkPalindrome(word){

    const compWord = word;
    const revWord = compWord.split('').reverse().join('');
    if(compWord === revWord){
      console.log(compWord + " is a Palindrome");
    } else {
      console.log(compWord + " is not a Palindrome");
    }
    }
    checkPalindrome("radar");
    checkPalindrome("boob");
    checkPalindrome("beer");





// 3. SUMDIGITS


let sum = 0;
function sumDigits(num) {
let singleNums = num.toString().split('');
// console.log(singleNums);
let newNums = singleNums.map(Number)
// console.log(newNums);
for (let i = 0; i < newNums.length; i++){
    // console.log(newNums[i]);
    addThis = newNums[i];
    sum += addThis;
    console.log(sum);
}
}
sumDigits(77);










// 4. Pythagoras Theorem

let sideC;
let sideCSq;

    function calcSideC (sideA, sideB) {
        sideASq = (Math.pow(sideA, 2)); 
        console.log(sideASq);
        sideBSq = (Math.pow(sideB, 2));
        console.log(sideBSq);
        sideCSq = (sideASq + sideBSq);
        console.log(sideCSq);
        sideC = Math.sqrt(sideCSq);
        console.log(sideC);
    }

    calcSideC(2, 4);


// 5. SUM ARRAY
let numbers = [1,2,3,4]
let sum = 0;

numSum =  function (array){
for (var i = 0; i < numbers.length; i++){
  sum += numbers[i]
}
}

numSum(numbers);
console.log(sum);


// 6. CHECK PRIME


function checkPrime (num) {
    let prime = true;
    for (let i = 2; i <= num; i++) {
      if (num%i===0 && i!==num) {
          prime = false;
          console.log(`Nope the number ${num} is not prime`);
          break;
      }  else {
        console.log(`Yeah, the number ${num} is prime!`);
    }
}
}

checkPrime(8);
checkPrime(12);
checkPrime(37);


function printPrimes(num){
for (let counter = 0; counter <= num; counter++) {

    let prime = true;
    for (let i = 2; i <= num; i++) {
        if (counter%i===0 && i!==counter) {
            prime = false;
        }
    }
    if (prime === true) {
                console.log(counter);
    }
}
}
printPrimes(91);
