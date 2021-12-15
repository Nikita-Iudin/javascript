

/*const answers = [];

answers [0] = prompt('Как ваше имя?', '');
answers [1] = prompt('Как ваша фамилия?', '');
answers [2] = prompt('Сколько вам лет?', '');

document.write(answers);*/

'use strict'; 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      

      console.log(personalMovieDB); 