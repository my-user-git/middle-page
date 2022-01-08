document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.section-catalog__painter_sub-link').forEach(function (TabsPainter) {
    TabsPainter.addEventListener('click', function (event) {
      let el = this
      el.classList.add('painter-sub__active_link')
      document.querySelectorAll('.section-catalog__painter_sub-painter').forEach(item => {
        if (item != el) {
          item.classList.remove('painter-sub__active')
        }
      })
      document.querySelectorAll('.section-catalog__painter_sub-link').forEach(item => {
        if (item != el) {
          item.classList.remove('painter-sub__active_link')
        }
      })
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-catalog__painter_sub-painter').forEach(function (TabsPainterContent) {
        TabsPainterContent.classList.remove('painter-sub__active')
      })
      document.querySelectorAll(`[data-target="${path}"]`).forEach(item => {
        item.classList.add('painter-sub__active')
      })
    })
  })

  document.querySelectorAll('.section-catalog__painter_item-date').forEach(function (TabsDate) {
    TabsDate.addEventListener('click', function (event) {
      let el = this
      el.classList.toggle('section-catalog__painter_active')
      document.querySelectorAll('.section-catalog__painter_sub-painter').forEach(item => {
        if (item != el) {
          item.classList.remove('painter-sub__active')
        }
      })
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-catalog__painter_sub-painter').forEach(function (TabsDateContent) {
        TabsDateContent.classList.remove('painter-sub__active')
      })
      document.querySelectorAll(`[data-target="${path}"]`).forEach(item => {
        item.classList.add('painter-sub__active')
      })
    })
  })

  document.querySelectorAll('.section-catalog__countries_link').forEach(function (TabsCountries) {
    TabsCountries.addEventListener('click', function (event) {
      let el = this
      el.classList.add('section-catalog__countries_link-active')
      document.querySelectorAll('.section-catalog__desc').forEach(item => {
        if (item != el) {
          item.classList.remove('section-catalog__desc_active')
        }
      })
      document.querySelectorAll('.section-catalog__countries_link').forEach(item => {
        if (item != el) {
          item.classList.remove('section-catalog__countries_link-active')
        }
      })
      console.log(document.querySelectorAll('.section-catalog__desc'))
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-catalog__desc').forEach(function (TabsCountriesContent) {
        TabsCountriesContent.classList.remove('section-catalog__desc_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__desc_active')
      console.log(event.currentTarget.dataset.path)
    })
  })
})
