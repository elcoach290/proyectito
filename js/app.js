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

