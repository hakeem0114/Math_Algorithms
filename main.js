console.log("Console Log is connected")

//#1: Fibonnaci
// Given a number "n"
// Find the first "n" elements in a fibonnacci sequence
// array = [0,1]
//Next number is the sum of the previous 2

// // fibonnacci(7) = [0,1,1,2,3,5,8])

// function fibonnacci(n){
//     let fib = [0,1];

//     for(let i = 2;i<n;i++){
//         fib[i] = fib[i-1] + fib[i-2]; //New number = sum of (past 2 numbers)

//     }
//     return fib;
// }


// console.log(fibonnacci(7));

//Big O = O(n)
//Space Complexity = O(n) since you are adding more memory to the array per iteration

//#2: Factorial of a number
/*
Given an int n, find the factorial
Factorial is the product of positive int <= n
Fact(0) = 1
// Fact(5) = 5*4*3*2*1 = 120
// */

// function Factorial(n){
//     if(n == 0){
//         return 1
//     }else{
//         return n*Factorial(n-1)
//     } 
// }
// console.log(Factorial(5))
// console.log(Factorial(0))

// /*
// Big O: O(n) since the time changes based on the increasing n

// Space Complexity: O(n)
// */

//#3: Prime Number
/* #3: isPrime #
Given a natural number n, check if its a prime number
Prime num >1 && is not a product of 2 smaller natural numbers

isPrime(5) = true since (1*5 or 1*5)
isPrime(4) = false since (1*4 or 2*2 or 4*1)
*/

// function isPrime(n){
//     if(n > 1 && n%2){
//         return true;
//     }else{return false}
// }
// console.log(isPrime(11))

// /*
// Big O: O(1) since the run time does not change based on input n

// Space Complexity: O(1) space does not increase based on input n
// */

/* 
#4:power of 2
Given a positive integer n, check if the number is a power of 2 or not


isPowerofTwo(1) = true since 2^0 = 1
isPowerofTwo(8) = true since 2^3 = 2*2*2 = 8
Pseudo Code: 8/2 = 4, 4/2 = 2, 2/2 = 1 (remainder = 0 for all divisions till 1) ==> pow of 2
*/
// O(log n)
// function isPowerofTwo(n){
//     if (n<1){return false}else if(n ==1){return true}
    
//     else if(n>1){ //Correct minimum number
//                 if(n%2 != 0){return false }
//                     else{
//                         n = n/2;  //Reduce value by half = Binary search = O(logn)
//                     }
//         return true;
//     }
    
// }
// /*
// Big O: O(logn) = binary search = halving input size per interation

// Space Complexity: O(1) since no extra space is used, only reduced = O(1)
// */

//O(1)
// function isPowerofTwo(n){
//     let powerof2 = Math.log(n)/Math.log(2); //Power of 2 by log both side of exponent
//     console.log(powerof2)

//     if(powerof2 == Math.floor(powerof2)){  
// //If powof2 is whole #, then its a powof2. Else its a decimal & not a powof2
//         return true
//     } else {return false}
// }


// console.log(isPowerofTwo(1))
// console.log(isPowerofTwo(2))
// console.log(isPowerofTwo(5))
// console.log(isPowerofTwo(8))
// /*
// Big O: O(1) = input does not change time

// Space Complexity: O(1) no extra space is need
// */


//#6: Recursive Fibonnaci
/*
Problem:
Given n, find the nth element of the fibonnaci
=(0,1,1,2,3,5,8..)

recursiveFibonnaci(0) = 0
recursiveFibonnaci(1) = 1
// recursiveFibonnaci(6) = 8

// */

// function recursiveFibonnaci(n){
//     //Recursion base case to avoid infinite loop  = n<2 = [0,1]
//     if(n<2){
//         return n
//     }

//     //Recursive statement
//     return recursiveFibonnaci(n-1) +recursiveFibonnaci(n-2)

// }
// console.log(recursiveFibonnaci(6))

/*
Big O: O(2^n) since each recursive function calls (2) more recursive functions..

Space Complexity: O(n) since there is only ever (1) n recursion at a time
*/



//#7: Recursive Factorial
/*
Problem:
fact(0) = 1
fact(4) = 4*3*2*1

// */
// function factorial(n){
//     if(n == 0){
//         return 1
//     }

//     return n*factorial(n-1)

// }

// console.log(factorial(4))
// console.log(factorial(5))

/*
Big O: O(n) since as n increases, instructions increase at the same pace

Space Complexity: O(n)
*/