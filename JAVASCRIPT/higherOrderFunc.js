// Higher order functions are a type of functions which expects other functions as a parameter

function h(x, func){
    // h -> is a HOF
    // func -> call back
    console.log(x*x)
    func(x*x)
}

h(12, exec)

function exec(n){
    console.log("The squared value is: ", n)
}



//  CONCEPT OF SETTIMEOUT (This is not an inbuilt method in js. Browser supports this feature or any runtime environment like node js)

console.log("start")

setTimeout(function f(){  // setTimeout is a HOF as it takes a function as parameter
    console.log("Timer done")
}, 3000)

console.log("end")



console.log("start")

setTimeout(function f(){  
    console.log("Timer done 1") // function f is the callback 1 
}, 100)

setTimeout(function f(){  
    console.log("Timer done 2") // function f is the callback 2
}, 0)

console.log("end")

for(let i=0; i<10000000000; i++) {}

// first start is printed then setTimeout is triggered in the runtime one by one. both functions are retured and timer is running in the background. End is printed and the for loop gets triggered. Now 2nd setTimeout is finished first (0 sec), so the callback 2 waits in a macrotask queue / callback queue.. after 100 mili sec 1st settimeout is also finished and callback 1 is added in the queue. Meanwhile for loop is running. Now there is an event loop which handles how callbacks and functions are executed in the program... This event loop checks if both call stack and global piece of code is empty, then executes the macrotask queue / callback queue. In our case for loop is still running so global piece of code is not empty yet. so callbacks are not executed.. once the for loop gets finished callback 2 is added in the callstack and executed (Timer done 2 is printed)... after which callback 1 is added in the callstack and executed (Timer done 1 is printed) 