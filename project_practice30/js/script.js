/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adblock = document.querySelectorAll('.promo__adv');
    

    const promoGenre = document.querySelector('.promo__genre');
    

    /**@type{HTMLElement} */
    const poster = document.querySelector('.promo__bg');

    const promoItems = document.querySelector('.promo__interactive-list');
    //const addblock = document.querySelector('.add');

    const addForm = document.querySelector('form.add');
    const addingInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"');



    const deleteAdv=(arr)=>{
        arr.forEach(item=>{
            item.remove();
        });
    };
    
    

    const makeChanges=()=>{
        promoGenre.innerHTML = '<h1>Драма</h1>';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    


    const sortArray=(arr)=>{
        arr.sort();
    }

    


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let movieName = addingInput.value;
        if( !movieName){
            return;
        }


        if (movieName.length > 21) {
            movieName = movieName.substring(0, 21) + '...';
        }
        if (checkbox.checked) {
            console.log('Добавляю любимый фильм!');
        }
        movieDB.movies[movieDB.movies.length] = movieName;

        createMovieList(movieDB.movies,promoItems);
        event.target.reset();

    });


    



    function createMovieList(films,parent) {
        parent.innerHTML = "";
        sortArray(films);
        films.forEach((film, i) => {
            parent.innerHTML +=
                `<li class="promo__interactive-item"> ${i} ${movieDB.movies[i]} <div class="delete"></div></li>`;
        });


        const deleteArray = document.querySelectorAll('.delete');
        deleteArray.forEach((deleteEl,i) => {
            deleteEl.addEventListener('click', () => {
                //console.log(deleteEl.parentElement.value);
                //console.log(deleteEl.parentNode.value);
                let currentPromoitem = deleteEl.parentElement;
                //deleteEl.parentElement.remove();
                //let indexItem = Array.from(promoItems.children).indexOf(currentPromoitem);
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies,promoItems);
            });

        });

    }

    deleteAdv(adblock);
    makeChanges();
    
    createMovieList(movieDB.movies,promoItems);
    

});

// promoItems.forEach((item,i)=>{

//     let newMovieName=`${i} ${movieDB.movies[i]}`;
//     item.textContent=newMovieName;
// });




