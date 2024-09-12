
// This is how a promise object is created. Promise object takes a callback in which there are two parameters (res or resolver and rej or rejector)

// const pr = new Promise((res, rej) => {
//     console.log("Executor callback triggered by promise constructor");
//     for(let i=0; i<10000000000; i++){}
// });

// console.log("Created the promise object");
// console.log(pr);


const pr = new Promise(function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber % 2 == 0) {
        res(); // random number is even
    }
    else {
        rej(); // random number is odd 
    }
});

console.log(pr); // try this whole code in browser js, then only u can see the resolver and rejector status showing in promise