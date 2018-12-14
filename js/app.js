// 1. Verbal Questions
// Arguments and parameters are different names for the same thing, and are also called inputs. Though not required
// when declaring a function, they are defined when the function is invoked.

// console.log will just print the result of your function into the console so that you can verify its working. 
// Return may or may not return a value to the programmer, but it also affects the control flow of the code, while 
// console.log doesn't.

// 2. 


function checkPalindrome(aWord){

    let makeNorm = aWord.toLowerCase();
    
    let Palindrome = makeNorm.split('').reverse().join('');
    
    if(makeNorm === Palindrome){
      
      console.log(aWord + " is a Palindrome");
    
    }else{
      
      console.log(aWord + " is not a Palindrome");
    }
    }

    checkPalindrome("radar");
    checkPalindrome("boob");
    checkPalindrome("stinky");






