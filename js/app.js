const burger = document.querySelector('.header__burger');
const hnav = document.querySelector('.header__navigation');
const navlinks = document.querySelectorAll('.menu__link');

burger.addEventListener("click", () => {
	hnav.classList.toggle('header__navigation--visible');
});

/*
navlinks[0].style.color="red";
navlinks[1].style.color="green";
navlinks[2].style.color="yellow";
navlinks[3].style.color="tomato";
*/
/*
navlinks[0].addEventListener("click", () => {
	hnav.classList.remove('header__navigation--visible');
});
navlinks[1].addEventListener("click", () => {
	hnav.classList.remove('header__navigation--visible');
});
navlinks[2].addEventListener("click", () => {
	hnav.classList.remove('header__navigation--visible');
});
navlinks[3].addEventListener("click", () => {
	hnav.classList.remove('header__navigation--visible');
});
*/

navlinks.forEach((link)=>{
	link.addEventListener("click", () => {
		hnav.classList.remove('header__navigation--visible');
	});
})



$('#main-carrusel').slick({
	dots: true,
	autoplay: true
});

$('#secondary-carrusel').slick({fade: true});

$('#team-carrusel').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





