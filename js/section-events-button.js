document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.section-events__button').addEventListener('click', function () {
        document.querySelectorAll('.section-events__hidden').forEach(item => {
            item.classList.add('section-events__hidden_open')
        })
        document.querySelector('.section-events__button').classList.add('section-events__button_hidden')    
    })
})