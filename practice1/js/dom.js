'use strict';

const box=document.getElementById('box');
const btns=document.getElementsByTagName('button');
const circles=document.getElementsByClassName('circle');
const hearts=document.querySelectorAll('.heart');
const oneHeart=document.querySelector('.heart');
const oneButton=document.querySelector('.button');
const wrapper=document.querySelector('.wrapper');

box.style.backgroundColor='blue';
box.style.width='500px';

let num=200;
btns[1].style.cssText=`background-color: magenta; width: ${num}px`;


hearts.forEach(item=>{
    item.style.backgroundColor='green';
});

 const div =document.createElement('div');
 div.classList.add('black');

 
div.innerHTML="<h1>Hello world</h1>";

//div.textContent="Hello";


 wrapper.insertBefore(div,hearts[1]);
 div.insertAdjacentHTML("beforeend",'<h2>Super</h2>');
//wrapper.appendChild(div);

//wrapper.append(div);
//hearts[0].after(div);

//circles[0].remove();

//hearts[0].replaceWith(circles[0]);
