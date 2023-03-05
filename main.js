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
/*
Given a natural number n, check if its a prime number
Prime num >1 && is not a product of 2 smaller natural numbers

isPrime(5) = true since (1*5 or 1*5)
isPrime(4) = false since (1*4 or 2*2 or 4*1)
*/

function isPrime(n){
    if(n > 1 && n%2){
        return true;
    }else{return false}
}
console.log(isPrime(11))

// /*
// Big O: O(1) since the run time does not change based on input n

// Space Complexity: O(1) space does not increase based on input n
// */
