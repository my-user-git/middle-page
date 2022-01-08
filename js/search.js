document.addEventListener('DOMContentLoaded', function () {
    var wwidth = document.body.clientWidth
    document.querySelector('.header-container__search_link').addEventListener('click', function () {
        document.querySelector('.header__top_search-form').classList.add('search-form__open')
        // document.querySelector('.header__top_search-input').classList.add('search-form__open')
        //  if (window.matchMedia('(max-width: 768px)').matches) {
        //     document.getElementById('#search-top').size = wwidth / 12
        // }
    })
    document.addEventListener('click', e => { // при клике в любом месте окна браузера
        const target = e.target // находим элемент, на котором был клик
        if (!target.closest('.header-container__search_link') && !target.closest('.header__top_search-input')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
            document.querySelector('.header__top_search-form').classList.remove('search-form__open') 
            // document.getElementById('search-top').size == '24'
            // то закрываем окно навигации, удаляя активный класс
        }
        console.log(target)
    })
})