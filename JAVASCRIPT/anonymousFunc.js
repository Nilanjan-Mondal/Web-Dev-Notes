let x = function(){   // anonymous function
    console.log("hi")
}
x();  // anonymous function call


(function exec(){    // imidiately invoked function (when a function is needed imidiately and never again)
    console.log("named")
})();


(function (x){
    console.log(x*x)
})(5);