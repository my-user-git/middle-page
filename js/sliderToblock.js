(function() {

    'use strict'

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:640px)' )
  
    // keep track of swiper instances to destroy later
    let swiper5
    let swiper3
  
    const breakpointChecker = function() {
  
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches) {
  
        // clean up old instances and inline styles when available
        if ( swiper5 !== undefined ) swiper5.destroy( true, true )
        document.querySelector('.swiper-pagination__myEvents').style.display = 'none' 
        document.querySelector('.section-events__button').style.display = 'flex'
        // or/and do nothing
        return enableSwiper5 ()
  
        // else if a small viewport and single column layout needed
        } else {
            document.querySelector('.swiper-pagination__myEvents').style.display = 'block' 
            document.querySelector('.section-events__button').style.display = 'none'
          // fire small viewport version of swiper
          if ( swiper3 !== undefined ) swiper3.destroy( true, true )
          return enableSwiper3()
        }
  
    }
  
    const enableSwiper3 = function() {
  
        swiper5 = new Swiper('.myEvents', {
            slidesPerView: 1,
            spaceBetween: 50,
            pagination: {
                el: ".swiper-pagination__myEvents",
                clickable: true,
            },  
        })
  
    }

    const enableSwiper5 = function() {
  
        swiper3 = new Swiper(".myPublication", {
            slidesPerView: 7,
            spaceBetween: 30,
    
            breakpoints: {
    
                321: {
                    spaceBetween: 34,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
    
                769: {
                    spaceBetween: 49,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 52,
                    slidesPerGroup: 3
                }
            },
            navigation: {
                nextEl: ".swiper-button-next__myPublication",
                prevEl: ".swiper-button-prev__myPublication",
            },
            pagination: {
                el: ".swiper-pagination__myPublication",
                clickable: true,
                type: "fraction",
            },
        })
  
    }
  
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
  
    // kickstart
    breakpointChecker()
  
  
  
  })(); /* IIFE end */

// document.addEventListener('DOMContentLoaded', function () {
//     var swiper3 = Swiper
//     var swiper5= Swiper
//     // var init = false
//     const mediaQuery = window.matchMedia('(max-width: 640px)')

    // swiper5 = new Swiper('.myEvents', {
    //     slidesPerView: 1,
    //     spaceBetween: 50,
    //     pagination: {
    //         el: ".swiper-pagination__myEvents",
    //         clickable: true,
    //     },  
    // })

    // swiper3 = new Swiper(".myPublication", {
    //     slidesPerView: 7,
    //     spaceBetween: 30,

    //     breakpoints: {

    //         321: {
    //             spaceBetween: 34,
    //             slidesPerView: 2,
    //             slidesPerGroup: 2,
    //         },

    //         769: {
    //             spaceBetween: 49,
    //             slidesPerView: 2,
    //             slidesPerGroup: 2,
    //         },
    //         1025: {
    //             slidesPerView: 3,
    //             spaceBetween: 50,
    //             slidesPerGroup: 3
    //         }
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next__myPublication",
    //         prevEl: ".swiper-button-prev__myPublication",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination__myPublication",
    //         clickable: true,
    //         type: "fraction",
    //     },
    // })

//     function handleTabletChange() {
//         if(mediaQuery.matches) {
//             // if (!init) {
//                 // init = true
//                 swiper5.init()
//                 document.querySelector('.section-events__button').style.display = 'none'
//                 swiper3.destroy()
//             // } 
            
//         } else  {
//                 // init = false    
//                 swiper5.destroy()
//                 swiper3.init()
//                 document.querySelector('.section-events__button').style.display = 'flex'
//                 document.querySelector('.swiper-pagination__myEvents').style.display = 'none'
//             }
     
//     }

//     mediaQuery.addListener(handleTabletChange)
//     handleTabletChange(mediaQuery)

// })

// window.addEventListener('load', function() {
//     swiperMode();
// });

// /* On Resize
// **************************************************************/
// window.addEventListener('resize', function() {
//     swiperMode();
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const mediaQuery = window.matchMedia('(max-width: 640px)')
//     function handleTabletChange(e) {
//         if (e.matches) {
//             swiper3.slideTo(0, 500, )
//             document.querySelector('.swiper-myPublication__btns').style.display = 'none'
//             swiper3.disable()
//             // swiper5.enable()
//             document.querySelectorAll('.section-events__hidden').forEach(item => { 
//             item.style.display = 'flex'
//             })
//         } else {
//             swiper3.enable()
//             document.querySelector('.swiper-myPublication__btns').style.display = 'flex'
//             swiper3.slideTo(0, 500,)
//             // swiper5.disable()
//             document.querySelectorAll('.section-events__hidden').forEach(item => { 
//                 item.style.display = 'flex'
//             })
//         }
//     }
//     mediaQuery.addListener(handleTabletChange)
//     handleTabletChange(mediaQuery)
// })

// document.addEventListener('DOMContentLoaded', function () {
//     const mediaQuery = window.matchMedia('(max-width: 640px)')
//     const swiper3 = document.querySelector('.myPublication')
//         window.addEventListener ('resize',function() {
//             if (mediaQuery.matches) {
                
//                 swiper3.disable()
//                }  else {
//                 swiper3.enable()
//                 swiper3.slideTo(0, 500, )
//             }               
//         })
// })


// document.addEventListener('DOMContentLoaded', function () {
//     const mediaQuery = window.matchMedia('(max-width: 640px)')
//     document.querySelectorAll('.section-publications__right_slide').forEach(item => { 
//         window.addEventListener ('resize',function() {
//             if (mediaQuery.matches) {
//                 item.classList.remove('swiper-slide')
//                 document.querySelector('.swiper-myPublication__btns').style.display = 'none'
//             } else {
//                 item.classList.add('swiper-slide')
//                 document.querySelector('.swiper-myPublication__btns').style.display = 'flex'
//             }
//         })
//     })
//     const mediaQuery320 = window.matchMedia('(max-width: 440px)')
//     document.querySelectorAll('.section-events__item').forEach(item => { 
//         window.addEventListener ('resize',function() {
//             if (mediaQuery320.matches) {
//                 item.classList.add('swiper-slide')
//                 document.querySelector('.swiper-pagination__myEvents').style.display = 'flex'
//             } else {
//                 item.classList.remove('swiper-slide')
//                 document.querySelector('.swiper-pagination__myEvents').style.display = 'none'
//             }
//         })
//     })
// })


// document.addEventListener('DOMContentLoaded', function () {

//     document.querySelectorAll('.section-publications__right_slide').forEach(item => { 
//         window.addEventListener ('resize',function() {
//             if (window.innerWidth <= 640) {
//                 item.classList.remove('swiper-slide')
//                 document.querySelector('.swiper-myPublication__btns').style.display = 'none'
//             } else {
//                 item.classList.add('swiper-slide')
//                 document.querySelector('.swiper-myPublication__btns').style.display = 'flex'
//             }
//             console.log(window.innerWidth)
//         })
//     })
// })