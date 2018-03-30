//we name the class

class user {
    //we call the constructor function and create parameters
    //these will be values that we want to be passed in and stored in the object
    constructor(first,last, e) {
        //on the right side of these expressions,the word 'first' 'last' and 'e' below
        //we have the value that is getting passed into the parens when the object is created
        this.f = first;
        this.l = last;
        this.email = e;
        //on the left side we have the actual properties of the object
        //the left side stores the incoming value from the right side as 
        // the property for 'this' specific object being created
    }
}

var userone = new user("paul", "o'connor", "poconnor@elevenfifty.org")
console.log(userone.first); //undefined
console.log(userone.f); //paul
console.log(userone.l); //oconnor
console.log(userone); //user {f:"paul", l: "o'connor", email: "poconnor@elevenfifty.org"}

class player{
    constructor(names, points, numbers,){
        this.name = names;
        this.point = points;
        this.number = numbers;
    }
}
var player1 = new player("kyle",100,32)
console.log(player1.name,player1.point,player1.number);
console.log(player1.name);
console.log(player1.point);
console.log(player1.number);