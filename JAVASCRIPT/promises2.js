const p1 = new Promise((res, rej) => {
    console.log("Executor callback triggered by promise constructor: p1");
    setTimeout(() => {
        console.log("Timer of p1 done");
        res(100);
    },500);
});

p1.then(function a(val) {
    console.log("Executing a", val);  
}, function b(val){
    console.log("Executing b", val);
});

setTimeout(() => {
    console.log("Timer 1 done");
}, 3000);

const pr = new Promise(function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor: pr");
    setTimeout(function prCB() {
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2 == 0) {
            res(randomNumber); // random number is even
        }
        else {
            rej(randomNumber); // random number is odd 
        }
    }, 4000);
});

pr.then(function f(val) {
    console.log("Executing f", val)
}, function g(val) {
    console.log("Executing g", val)
});
pr.then(function h(val) {
    console.log("Executing h", val)
}, function i(val) {
    console.log("Executing i", val)
});

for(let i=0; i<10000000000; i++) {};