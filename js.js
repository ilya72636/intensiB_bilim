

document.addEventListener('DOMContentLoaded', function() {
    const bodyElement = document.querySelector('body');
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        bodyElement.classList.add(storedTheme);
    }

    document.querySelector('.switchMode').addEventListener('click', function() {
        bodyElement.classList.toggle('light');
        bodyElement.classList.toggle('dark');

        // Сохраняем текущую тему в localStorage
        const currentTheme = bodyElement.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });
});




// Бургер меню
function toggleBurgerMenu() {
    let burgerMenu = document.getElementById("burgerMenuitems");
    burgerMenu.style.display = (burgerMenu.style.display === "flex" || burgerMenu.style.display === "") ? "none" : "flex";
}

document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('.home__intro');
    const scrollItem = document.querySelectorAll('.scroll-item');
    const header = document.querySelector('.header__wrapper');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        // console.log(windowCenter)
        scrollItem.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 5.5);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let homeCenter = home.offsetHeight / 1.1;

        if (scrollTop >= homeCenter) {
            header.classList.add('fixed')
            home.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed')
            home.style.marginTop ='0px'
        }
        
        
    };
    // headerFixed();
    scrollAnimation();
    window.addEventListener('scroll', () => {
        // headerFixed();
        scrollAnimation();

    });
});



// команда перелистывание карточек
let offset = 0;
const sliderLine = document.querySelector('.team__title__cards');

document.querySelector('.btn__slider__next').addEventListener('click', function(){
    offset = offset + 274;
    if (offset > 549){
        offset = 0
    }
    sliderLine.style.left = -offset +'px';
});

document.querySelector('.btn__slider__prev').addEventListener('click', function(){
    offset = offset - 274;
    if (offset < 0 ){
        offset = 549
    }
    sliderLine.style.left = -offset +'px';
});



// текст и три точки

function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btnRead = document.getElementById("btnRead");

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnRead.innerHTML = 'Подробнее';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btnRead.innerHTML = 'Скрыть';
        more.style.display = 'inline';
    }
}



"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', formSend);

    function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        if (error === 0) {
            form.classList.add('_sending');
            sendFormData();
        } else {
            alert('Заполните обязательные поля');
        }
    }

    async function sendFormData() {
        try {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: new FormData(form)
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                throw new Error('Ошибка отправки формы');
            }
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка при отправке формы');
            form.classList.remove('_sending');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && !input.checked) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});


// function darkMode() {
//     const body = document.body
//     const wasDarkMode = localStorage.getItem('darkmode') === 'true'

//     localStorage.setItem('darkmode', !wasDarkMode)
//     body.classList.toggle('dark-mode', !wasDarkMode)
// }

// document.querySelector('.theme__btn').addEventListener('click', darkMode)

// let switchMode = document.getElementById('switchMode');

// switchMode.onclick = function() {
//     let theme = document.getElementById('theme');

//     if (theme.getAttribute("href") == 'hom.sass'){
//         theme.href = 'page_hom.sass';
//     } else {
//         theme.href = 'hom.sass';
//     }
//  }

// document.querySelector('.switchMode').addEventListener('click', function() {
//     const mainElement = document.querySelector('main');

//     // Переключаем между классами light и dark
//     mainElement.classList.toggle('light');
//     mainElement.classList.toggle('dark');

//     // Переключаем тему в зависимости от текущего класса
//     const themeLink = document.getElementById('theme');
//     if (mainElement.classList.contains('light')) {
//         themeLink.href = 'light_theme.css'; // Путь к файлу светлой темы
//     } else {
//         themeLink.href = 'dark_theme.css'; // Путь к файлу темной темы
//     }
// });


// document.querySelector('.switchMode').addEventListener('click', function() {
//     const mainElement = document.querySelector('main');

//     // Переключаем между классами light и dark
//     mainElement.classList.toggle('light');
//     mainElement.classList.toggle('dark');
// });


