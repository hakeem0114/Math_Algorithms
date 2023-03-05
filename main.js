console.log("Console Log is connected")

//#1: Fibonnaci
// Given a number "n"
// Find the first "n" elements in a fibonnacci sequence
// array = [0,1]
//Next number is the sum of the previous 2

// fibonnacci(7) = [0,1,1,2,3,5,8])

function fibonnacci(n){
    let fib = [0,1];

    for(let i = 2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}


console.log(fibonnacci(7));