//ES6 JS Classes
class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    //Method 1
    greet() {
        console.log('Welcome back,' + this.name);
    }
    //Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//super

class bronzeleveluser extends User {
    constructor(username, password, ccinfo) {
        super(username,password);
        this.type = "bronze user";
        this.ccinfo = ccinfo;
    }
    getInfo(){
        console.log(this.username, this.password,this.type,this.ccinfo);
    }
}
var bronzeguy = new bronzeleveluser("bronze dude",'bronze7589','4242424242442424242');
bronzeguy.greet();
bronzeguy.status();
console.log(bronzeguy)