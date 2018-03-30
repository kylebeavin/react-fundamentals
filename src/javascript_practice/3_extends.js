//Extends

class User {
    constructor(name){
      this.name = name;
      this.type = "Trial User"
    }
    //Method 1
    greet(){
      console.log('Welcome back,' + this.name);
    }
    //Method 2
    status(){
      console.log('Current status: ' + this.type);
    }
    //extends
  }
  class trialuser extends User {
      trialending(){
          console.log("your trial will be ending soon, " + this.name + '.' + 'would you like to join our program');
      }
  }
  //instance of user class
  var anondude = new User('anonymous');
  anondude.greet();
  anondude.status();
  //instance of trialuser class
  var Trialuser = new trialuser("paul");
  Trialuser.greet();
  Trialuser.trialending();
  Trialuser.status();

  class banneduser extends User {
    bannedreason(){
      console.log("you are banned because your mean");
    }
  }
  var banuser = new banneduser('meanguy');
  banuser.greet();
  banuser.status();
  banuser.bannedreason();