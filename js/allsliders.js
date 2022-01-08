var swiper = new Swiper(".mySlider", {
    loop: true,
    simulateTouch: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".myGallery", {
    // loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    simulateTouch: true,
    breakpoints: {

        601: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
            slidesPerGroup: 2,
            spaceBetween: 34
        },

        1025: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
            slidesPerGroup: 3,
            spaceBetween: 50
        }

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
    },
});


let swiperSlides = document.querySelector(".section-gallery").querySelectorAll(".swiper-slide")
let modal = document.querySelector(".swiper-section-modal")
let modalBtn = modal.querySelector(".swiper-section-modal__close")
swiperSlides.forEach(el => { 
  el.addEventListener("click", function() {
    let img = this.querySelector("img")
    let link = img.getAttribute("src")
    const path = event.currentTarget.dataset.path
    console.log(path)
    document.querySelectorAll(`[data-target="${path}"]`).forEach(item=> {
    item.classList.add("modal-active")
    item.querySelector("img").setAttribute("src", link)
    item.addEventListener("click", function() {
        item.classList.remove("modal-active")
      })
    })
  })
})


var swiper4 = new Swiper(".myPartners", {
    // loop: true,
    slidesPerView: 1,
    clickable: true,
    simulateTouch: true,
    breakpoints: {
        321: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2
        },

        769: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next__myPartners",
        prevEl: ".swiper-button-prev__myPartners",
    },
    pagination: {
        el: ".swiper-pagination__myPartners",
        clickable: true,
    },
});

