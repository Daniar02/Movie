/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

// for (let i = 0; i < adv.length; i++) { // Удалить реклами №1
//     adv[i].remove();
// }
adv.forEach(item => { // Удалить реклами №2
    item.remove();
});
// adv.forEach(function(item) { // Удалить реклами №3
//     item.remove();
// });
///////////////////////////////////////////////////////
genre.textContent = "Драма"; // Изменил жанр фильма
//////////////////////////////////////////////////////
poster.style.backgroundImage = 'url("img/bg.jpg")'; // Изменил задний фон
//////////////////////////////////////////////////////
movieList.innerHTML = ""; // Очистили
///////////////////////
movieDB.movies.sort(); // сортировали
////////////////////////
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML +=  // (a = a + 1)- (a += 1); 
    ` 
        <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;                        
});



