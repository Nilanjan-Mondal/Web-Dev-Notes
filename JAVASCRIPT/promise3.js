const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Timer of p1 done");
        res(100); // pending -> fulfilled; undefined -> 100
    }, 500);
});

// return type of .then is also a promise 
const p2 = p1.then(function f() {console.log("f")}, function g() {console.log("g")});
// p2 is a new promise
const p3 = p1.then(function h() {console.log("h")}, function i() {console.log("i")});
// p3 is also a new promise
// at first like others p2 and p3 is undefined and pending. as p1 is resolved(line 4), both function f and h goes to microtask queue, then the status of p2 and p3 depends on the return type of the funtions f and h, status becomes fulfiled if something is 'returned' properly and rejected if something is 'thrown'(err);


