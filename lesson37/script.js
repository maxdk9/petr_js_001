"use strict"

const buttons=document.querySelectorAll('button');
const wrapper=document.querySelector('.btn-block');


//console.log(buttons[0].classList.length);
//buttons[0].classList.add('red');
// console.log(buttons[0].classList.item(1));
// console.log(buttons[0].classList.add('red') );
// buttons[0].classList.remove('blue');
// buttons[0].classList.toggle('blue');
// if(buttons[0].classList.contains('red')){
//     console.log('sdfsdf');
// }

buttons[0].addEventListener('click',()=>
{
    // if(!buttons[1].classList.contains('red'))
    // {
    //     buttons[1].classList.add('red');
    //     console.log('addred');

    // }
    // else{
    //     buttons[1].classList.remove('red');
    //     console.log('removered');
    // }

    buttons[1].classList.toggle('red');

}
);


wrapper.addEventListener('click',(e)=>{
    console.dir(e.target);
    if(e.target&&e.target.tagName=='BUTTON'){
        console.log('HELLO');
    }
});

const btn=document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);







