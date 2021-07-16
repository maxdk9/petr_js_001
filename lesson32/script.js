"use strict"
//console.log(document.documentElement);
//console.log(document.body.childNodes);
//console.log(document.body.lastChild);
//console.log(document.body.firstChild);
//console.log(document.querySelector("#current"));


//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for(let child of document.body.childNodes){

    if(child.nodeName=='#text'){ 
        continue;
    }
    console.log(child);
}