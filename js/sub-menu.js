document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.header__nav-bottom_link').forEach(function (BottomMenu) {
    BottomMenu.addEventListener('click', function (event) {
      let el = this
      el.classList.toggle('header__nav-bottom_link-active')
      document.querySelectorAll('.header__nav-bottom_sub').forEach(item => {
        if (item.parentElement.querySelector('.header__nav-bottom_link') != el) {
          item.parentElement.querySelector('.header__nav-bottom_link').classList.remove('header__nav-bottom_link-active')
        }
        if (el.parentElement.querySelector('.header__nav-bottom_sub') != item) {
          item.classList.remove('header__nav-bottom_sub-active')
        }
      })

      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).classList.toggle('header__nav-bottom_sub-active')
    })
  })
  document.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header__nav-bottom_sub') && !target.closest('.header__nav-bottom_link')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      document.querySelectorAll('.header__nav-bottom_sub').forEach(function (item) { // то закрываем окно навигации, удаляя активный класс
        item.classList.remove('header__nav-bottom_sub-active')
      })
      document.querySelectorAll('.header__nav-bottom_link').forEach(function (item) { // то закрываем окно навигации, удаляя активный класс
        item.classList.remove('header__nav-bottom_link-active')
      })
    }
  })
})
