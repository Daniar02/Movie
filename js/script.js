/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания № 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */ 

// Возьмите свой код из предыдущей практики
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
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox =addForm.querySelector('[type="checkbox"]');
    

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMoveList(movieDB.movies, movieList);
        }

        event.target.reset();
    } );
    // for (let i = 0; i < adv.length; i++) { // Удалить реклами №1
    //     adv[i].remove();
    // }

    // adv.forEach(function(item) { // Удалить реклами №3
    //     item.remove();
    // });

    const deleteAdv = (arr) => {
        arr.forEach(item => { // Удалить реклами №2
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "Драма"; // Изменил жанр фильма

        poster.style.backgroundImage = 'url("img/bg.jpg")'; // Изменил задний фон
    };

    const sortArr = (arr) => {
        arr.sort();  // сортировали
    };
    
    function createMoveList(films, parent) {
        parent.innerHTML = ""; // Очистили

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML +=  // (a = a + 1)- (a += 1); 
            ` 
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;                        
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn .addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoveList(films, parent);
            });
        });
    }
    deleteAdv(adv);
    makeChanges();
    createMoveList(movieDB.movies, movieList);
});



