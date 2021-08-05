"use strict";

// const names=['ivan','anna','voldemar','ksenia'];

// const shrotnames=names.filter(function(name){
//     return name.length<5;
// });
// console.log(shrotnames);

// let anwers =['IvAn','AnnA','Hello'];
// anwers=anwers.map(item=>{return item.toLowerCase()});

// console.log(anwers);\\

// const array=[1,2,'sdf','12312'];
// console.log(array.some(item=>typeof(item)==='number'));
//  console.log(array.every(item=>typeof(item)==='number'));

 const array=[4,5,1,3,2,6];
const res=array.reduce((sum,current)=>sum+current);

console.log(res);
const fruits=['apple','pear','plum'];
const resfruits=fruits.reduce((sum,current)=>`${sum}+${current}`,3);

console.log(resfruits);


const obj={
    ivan:'persone',
    ann:'persone',
    dog:'animal',
    cat:'animal'
};
const newarr=Object.entries(obj)
.filter(item=>item[1]==='persone').map(item=>item[0]);
console.log(newarr);

