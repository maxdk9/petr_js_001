"use strict"
const btn= document.querySelector('button');
// btn.onclick=function(){
//     alert('Click');
// }

// btn.addEventListener('click',()=>{
//     alert('click');
// });

// btn.addEventListener('click',()=>{
//     alert('click1');
// });
let i=0;
const deleteElement=(e)=>{
    console.log(e.target);
    i++;
    if(i==1){
        btn.removeEventListener('click',deleteElement);
    }
};

btn.addEventListener('click',deleteElement);


const link =document.querySelector('a');
link.addEventListener('click',function(event){
    event.preventDefault();
});

btns=document.querySelectorAll('.button');
btns.forEach((btn)=>{
    btn.addEventListener('click',deleteElement,{once:true});
});