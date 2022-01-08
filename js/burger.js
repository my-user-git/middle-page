document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.header-container__burger').addEventListener('click', function () {
      document.querySelector('.burger-nav').classList.add('burger-nav__active')
      let hone = document.querySelector('.section-slider').querySelector('.section-slider__container').clientHeight 
      let PTop = document.querySelector('.header-top')
      let htwo = window.getComputedStyle(PTop, null).getPropertyValue('height') 
      let MTop = document.querySelector('.section-slider')
      let hthree = window.getComputedStyle(MTop, null).getPropertyValue('margin-top') 
      htwo = parseInt(htwo, 10)
      hthree = parseInt(hthree, 10)
      let h = hone + hthree + htwo
      
      console.log(hthree)
      document.querySelector('.burger-nav__active').style.height = h + 'px'
    })
    document.querySelector('.header-container__burger_x').addEventListener('click', function () {
      document.querySelector('.burger-nav').classList.remove('burger-nav__active')
    })
    document.addEventListener('click', e => { 
      const target = e.target 
      if (!target.closest('.header-container__burger') && !target.closest('.header-container__burger_x')) { 
        document.querySelector('.burger-nav').classList.remove('burger-nav__active')
      }
    })
})