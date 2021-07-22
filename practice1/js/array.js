"use strict";

const arr = [1,2,3,6,8];
// arr[99]=0;
// console.log(arr.length);
//arr.pop();
arr.push(10);
console.log(arr);


arr.forEach(function(item,i,arr){ 
    console.log(`${i} : ${item}`);
});

const str =prompt("","");
const products=str.split(",");

products.sort();
console.log(products.join(";"));
