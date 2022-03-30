const burger = document.querySelector('.header__burger');
const hnav = document.querySelector('.header__navigation');
burger.addEventListener("click", () => {
	hnav.classList.toggle('header__navigation--visible');
});