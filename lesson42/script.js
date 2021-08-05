"use strict"
const box =document.querySelector('.box');
// const width=box.clientWidth;
// const height=box.clientHeight;

// const width=box.offsetWidth;
// const height=box.offsetHeight;

 const width=box.scrollWidth;
 const height=box.scrollHeight;
console.log(width);
console.log(height);

const button =document.querySelector('button');
button.addEventListener('click',()=>{
    //box.style.height = box.scrollHeight+'px';

    console.log(box.scrollTop);

});

console.log(box.getBoundingClientRect().top);
const style = window.getComputedStyle(box);
console.log(style);