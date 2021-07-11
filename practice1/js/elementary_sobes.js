
"use strict";



const personalMovieDB={
    count:0,
    movies:{},
    actors:{    },
    genres:[],
    privat:false,
    start: function(){
        personalMovieDB.count=+prompt('Сколько фильмов вы посмотрели?','') ;
        while(personalMovieDB.count==''||personalMovieDB.count==null||isNaN(personalMovieDB.count))
        {
            personalMovieDB.count=+prompt('Сколько фильмов вы посмотрели?','') ;
        }
    },
    rememberMyFilms: function(){
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
    },
     detectPersonalLevel: function()
     {
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
        
    },
    showMyDb: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i=1;i<4;i++){
            const genre=prompt(`Ваш любимый жанр под номером ${i}`) ;
            if(genre!=null&&genre!=''){
                personalMovieDB.genres[i-1]=genre;
            }
            else{
                i--;
            }
        }
        let currentNumber=0;
        personalMovieDB.genres.forEach(function(genre,i,genres){
              console.log(`Favorite genre #${i+1} is ${genre}`);
        });
    },

    writeYourGenres2: function(){
        let genres=prompt(`Enter you favorite genres divided by coma`);
        if(genres===''&&genres==null){
            console.log('You entered illegal data');           

        }
        else{
            personalMovieDB.genres=genres.split(',');
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach(function(genre,i,genres){
            console.log(`Favorite genre #${i+1} is ${genre}`);
      });

    },

    toggleVisibleMyDb: function(){
        personalMovieDB.privat=!personalMovieDB.privat;
    }


};






console.log(personalMovieDB);
