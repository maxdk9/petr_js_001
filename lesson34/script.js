"use strict"
//touchstart
//touchend
//touchenter
//touchleave
//touchcancel
//touches
document.addEventListener('DOMContentLoaded',()=>{
    const box=document.querySelector('.box');
    box.addEventListener('touchstart',(e)=>{

        e.preventDefault();
        console.log('touch');
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });

     box.addEventListener('touchmove',(e)=>{
         e.preventDefault();
         console.log(t.targetTouches[0].pageX);
     });

    // box.addEventListener('touchend',(e)=>{
    //     e.preventDefault();
    //     console.log('touchend');
    // });

});