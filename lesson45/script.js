"use strict";

//const num =new Number(3);



function User(name, id){
    this.name=name;
    this.id=id;
    this.human=true;
    this.hello=function(){
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit=function(){
    console.log(`User ${this.name} get out`);
};


const ivan=new User('Ivan',28);
const alex=new User('Alex',20);
console.log(ivan);
console.log(alex);


ivan.hello();
alex.hello();


ivan.exit();
alex.exit();

class User1{
    constructor(name,id){
        this.name=name;
        this.id=id;
        this.human=true;

    }
    hello(){
        console.log(`Hello ${this.name} `);
    }
    exit(){
        console.log(`User ${this.name} get out`);
 
}