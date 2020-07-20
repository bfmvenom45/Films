const numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', ''); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const   a = prompt('Один із останіх переглянутих фільмів?', ''),
        b = prompt('Наскільки Ви його оцінете?', ''),
        c = prompt('Один із останіх переглянутих фільмів?', ''),
        d = prompt('Наскільки Ви його оцінете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);