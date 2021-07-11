"use strict";

let numberOfFilms;

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{    },
    genres:[],
    privat:false
};


function start(){
    numberOfFilms=+prompt('Сколько фильмов вы посмотрели?','') ;
    while(numberOfFilms==''||numberOfFilms==null||isNaN(numberOfFilms)){
        numberOfFilms=+prompt('Сколько фильмов вы посмотрели?','') ;
    }
}

function rememberMyFilms(){
    while(i<2){
        const a=prompt('Один из последних просмотренных фильмов? ',''),
             b=prompt('На сколько оцените его?','');
             if(a!=null&&b!=null&&a!=''&&b!=''&&a.length<50){
                 personalMovieDB.movies[a]=b;
                 console.log('done');
                 i++;
             } 
             else{
                 console.log('error');
        
             }    
    }
    
}

//start();
//rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log('you watch few films');
    }
    else if (personalMovieDB.count>=10){
        console.log('you are experinced kino-user');
    }
    else if(personalMovieDB.count>30){
        console.log('You are kinoman');
    
    }else{
        console.log('error');
    }
    
}

//detectPersonalLevel();

function showMyDb(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i=1;i<4;i++){
        const genre=prompt(`Ваш любимый жанр под номером ${i}`) ;
        personalMovieDB.genres[i-1]=genre;
    }
}

writeYourGenres();

console.log(personalMovieDB);
