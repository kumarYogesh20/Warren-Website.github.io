// progress scroll bar

window.onscroll = function(){
    let windowScroll = document.documentElement.scrollTop;
    let windowHeight = document.body.scrollHeight - document.documentElement.clientHeight;
    let ScrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById('progress').style.width = ScrollAmount + "%";

}


// Swipper Js Code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: {
        enabled: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     600: {
    //         slidesPerView: 1,
    //         // spaceBetween: 10,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    // },
});
// mob-menu
$(document).ready(function(){
    $(".mob-menu").click(function(){
      $(".mob-menu-list").toggleClass("show");
    });
});
// Services
const accordin = document.getElementsByClassName('contentbx');

for(i=0; i<accordin.length;i++){
    accordin[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

// preloader
let loader = document.getElementById('loader-bg');

window.addEventListener("load", function(){
    loader.style.display = "none";
})




