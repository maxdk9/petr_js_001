"use strict";

// const req=new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         console.log('Prepare data');
//         const product={
//             name:'TV',
//             price:2000
//         };
    
//         resolve(product);
//     },2000);
// });

// req.then((product)=>{

//     console.log('Data Received');
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             product.status='order';
//             resolve(product);
//             //reject();
//         }, 2000);
//     });


// }).then(data=>{
//     data.modify=true;
//     return data;
    
// }).then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.error('error occured');
// }).finally(()=>{
//     console.log('Exit');
// });


const test=time=>{
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve();
            
        }, time);
    });
};

// test(2000).then(()=>{
//     console.log('2000 ms goes');
// });

Promise.all([test(2000),test(1000)]).then(()=>{
    console.log('All');
});

Promise.race([test(1000),test(2000)]).then(()=>{
    console.log('All2');
})