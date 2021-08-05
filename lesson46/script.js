"use strict";

// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         return a+b;
//     }

//     console.log(sum());

// }

// showThis(4,5);


// const obj={
//     a:20,
//     b:15,
//     sum:function(){
//         console.log(this);
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name,id){
//     console.log(this );
//     this.name=name;
//     this.id=id;
//     this.human=true;
// }

//  let ivan=new User('Ivan',23);


// function sayName(surname){
//     console.log(this);
//     console.log(this.name+' '+surname);
// }
// const user={
//     name: 'John'
// };

// sayName.call(user,'Smith');
// sayName.apply(user,['Mad']);

// function count(num){
//     return this*num;
// }

// const double=count.bind(2);
// console.log(double(13));


const btn=document.querySelector('button');
btn.addEventListener('click',function(){
    this.style.backgroundColor='red';
})


//Обычная функция: в браузере this =window, но если use strict то будет undefined
//Если мы используем метод внутри объекта то this будет ссылаться на объект. Контекст у методов объекта сам объект
//this в конструкторах и классах это новый экземпляр объекта
//Ручная привязка this Call , apply, bind



