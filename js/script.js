'use strict';


let numberOfFilms; 
 
function start() {
    numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', ''); 

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', ''); 

    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

/* const   a = prompt('Один із останіх переглянутих фільмів?', ''),
        b = prompt('Наскільки Ви його оцінете?', ''),
        c = prompt('Один із останіх переглянутих фільмів?', ''),
        d = prompt('Наскільки Ви його оцінете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */



function rememberMyFilms () {
    for (let i = 0; i < 2; i++){
        const   a = prompt('Один із останіх переглянутих фільмів?', ''),
                b = prompt('Наскільки Ви його оцінете?', '');
    
        if (a != null && b != null && a !== '' && b != '' && a.length < 50) {
    
            personalMovieDB.movies[a] = b;
            console.log('готово');
        } else {
            console.log('помилка');
            i--;
        }
                
    } 
}
//rememberMyFilms ();



function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Подивлено досить мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ви класичний глядач');
    } else if (personalMovieDB.count >=30) {
        console.log('ВИ АКТОР'); 
    } else {
        console.log('Щось пішло не так:)');
    } 
}
//detectPersonalLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) { 
        personalMovieDB.geners [i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}
writeYourGenres ();
