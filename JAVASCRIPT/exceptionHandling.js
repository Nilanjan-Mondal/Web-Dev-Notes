function manualException(){
    const randomNumber = Math.floor(Math.random()*100);
    if(randomNumber % 2 == 0) {
        return randomNumber;
    }
    else {
        throw "Random number is odd"
    }
}

function caller(){
    try {
        console.log("This is risky");
        const response = manualException();
        console.log("Risky code workign fine", response);
    } catch (exception) {
        console.log("Bad luck we have an exception and we r in catch",);
        console.log(exception);
    }
}
caller();