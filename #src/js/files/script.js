"use strict";


document.addEventListener('DOMContentLoaded', () => {

	//Dark Mode
	const element = document.body,
		switcher = document.querySelector('.switch input');

	function darkMode() {
		if (localStorage.getItem('darkMode') != 'dark') {
			element.classList.add("dark-mode");
			localStorage.setItem('darkMode', 'dark');
		} else {
			element.classList.remove("dark-mode");
			localStorage.removeItem('darkMode');
		}
	}

	switcher.addEventListener('change', darkMode);

	if (localStorage.getItem('darkMode') == 'dark') {
		switcher.setAttribute('checked', true);
		element.classList.add("dark-mode");
	} else {
		switcher.removeAttribute('checked');
	}


	// Скрыть меню при клике вне меню
	let hamburger = document.querySelector('.icon-menu');
	let menu = document.querySelector('.menu__body');

	const toggleMenu = () => {
		body_lock(500);
		menu.classList.toggle('_active');
		hamburger.classList.toggle('_active');
	};

	hamburger.addEventListener('click', e => {
		e.stopPropagation();

	});

	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target == menu || menu.contains(target);
		let its_hamburger = target == hamburger;
		let menu_is_active = menu.classList.contains('_active');

		if (!its_menu && !its_hamburger && menu_is_active) {
			toggleMenu();
		}
	});
});