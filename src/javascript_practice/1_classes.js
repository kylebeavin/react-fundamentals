console.log("Classes file")
//ES6 JS Classes

class user {
    constructor(name){
        this.name=name;
        this.type="Trial User"
    }
    //method
    greet(){
        console.log('welcome back, ' + this.name);  
    }
    //method 2
    status(){
        console.log('current status: ' + this.type);
    }
}
//instance of the class/new object
var anondude = new user("anonymous dude");

//we can now use the instance and the . operator
//to access the 2 methods
anondude.greet();
anondude.status();

//another instance of the class 
var anonlady = new user("anonymous lady");
anonlady.greet();
anonlady.status();

//another instance of the class

var jeff = new user("jeff");
jeff.greet();
jeff.status();

var kyle = new user("kyle");
kyle.greet();
kyle.status();

var tom = new user("tom");
tom.greet();
tom.status();

var quincy = new user("quincy");
quincy.greet();
quincy.status();