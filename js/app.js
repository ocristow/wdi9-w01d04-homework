// 1. Verbal Questions
// Arguments and parameters are different names for the same thing, and are also called inputs. Though not required
// when declaring a function, they are defined when the function is invoked.

// 2. console.log will just print the result of your function into the console so that you can verify its working. 
// Return may or may not return a value to the programmer, but it also affects the control flow of the code, while 
// console.log doesn't.

// 3. 




// function checkPalindrome(word){

//     const compWord = word;
//     const revWord = compWord.split('').reverse().join('');
//     if(compWord === revWord){
//       console.log(compWord + " is a Palindrome");
//     } else {
//       console.log(compWord + " is not a Palindrome");
//     }
//     }
//     checkPalindrome("radar");
//     checkPalindrome("boob");
//     checkPalindrome("beer");





// 3. 
// Write a function sumDigits that accepts a number and returns the sum of its digits.
// console.log(sumDigits(42));
// => 6;


// function sumDigits(number)

// function sumDigits(number) {

//     let numString = number.toString();
//    //convert number into string
//    let numSplit = numString.split(''); 
//    // split up the digits into an array ['2', '3', '1']
//    let sum = numSplit[i] += sum;
//    for (let i = 0; i < numSplit.length; i++) {
   
   
//    let sum = [];
//    // create a sum variable to hold onto the total
     
//    // loop over the array
//     let newNum = numSplit.parseInt()
//    // Turn each digit back into a number before adding it to the total
    
//    // Add the digit to the total

//    // return the total
//         console.log(numSplit);     
//     }
// sumDigits(231);




// function sumDigits(number){
//     let numSplit = number.split('');
//     let sum += numSplit[i];
//     for (let i = 0; i < numSplit.length; i++){
//         //how to parseInt.()
//         let sumArray = numSplit.parseInt();
//         //add array

//         // return the total
//         console.log(sum);
//     }
// }


// sumDigits(231);




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



// 5.

// sumArray = function
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.

// Expected result:

// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21






