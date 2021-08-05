"use strict";
const log=function(a,b,...rest){
    console.log(a,b,rest);
}
log('1','2','3','4');

function calcOrDouble(number,basis=2){
    console.log(number*basis);
}

calcOrDouble(3,5);
calcOrDouble(4);