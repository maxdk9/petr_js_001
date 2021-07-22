// const timeId=setTimeout(function(){
//     console.log('Hello');
// },2000);

const btn=document.querySelector('.btn');

btn.addEventListener('click',myAnimation);
let timeid;
function myAnimation() {
    const elem=document.querySelector('.box');
    
    const id=setInterval(frame,20);
    let pos=0;
    function frame()
    {
        if(pos==300){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.top=pos+"px" ;
            elem.style.left=pos+'px';
        }
    }
}














// let i=0;

// btn.addEventListener('click',()=>{
//     //const timeId=setTimeout(logger,2000);
//     timeid=setInterval(logger,500);
// });



// const timeId2=setTimeout(logger, 2000);
 

// function logger(){
//     if(i==3){
//         clearInterval(timeid);
//     }

//     console.log('text');
//     i++;
// }


// let id=setTimeout(function log(){
//     console.log('Hello');
//     id=setTimeout(log,500);

// }, 500);