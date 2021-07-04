"use strict"
const numberOfFilms=+prompt('Сколько фильмов вы посмотрели?','') ;
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{    },
    genres:[],
    privat:false
};



// for(let i=0;i<2;i++){
//     const a=prompt('Один из последних просмотренных фильмов? ',''),
//     b=prompt('На сколько оцените его?','');
//     if(a!=null&&b!=null&&a!=''&&b!=''&&a.length<50){
//         personalMovieDB.movies[a]=b;
//         console.log('done');
//     }
//     else{
//         console.log('error');
//         i--;
//     }    
// }
let i=0;
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

console.log(personalMovieDB);
