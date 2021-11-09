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
	let hamburger = document.querySelector('.icon-menu'),
		menu = document.querySelector('.menu__body'),
		hamburgerParent = document.querySelector(".header__hamburger");

	const menu_close = () => {
		let iconMenu = document.querySelector(".icon-menu");
		let menuBody = document.querySelector(".menu__body");
		iconMenu.classList.remove("_active");
		menuBody.classList.remove("_active");
		iconMenuParent.classList.remove("_active");
		body_lock(500);
	};

	document.querySelector('.menu__close').addEventListener('click', menu_close)

	const toggleMenu = () => {
		body_lock(500);
		menu.classList.toggle('_active');
		hamburger.classList.toggle('_active');
		hamburgerParent.classList.toggle('_active');
	};

	hamburger.addEventListener('click', (e) => {
		e.stopPropagation();

	});

	document.addEventListener('click', (e) => {
		let target = e.target;
		let its_menu = target == menu || menu.contains(target);
		let its_hamburger = target == hamburger;
		let menu_is_active = menu.classList.contains('_active');

		if (!its_menu && !its_hamburger && menu_is_active) {
			toggleMenu();
		}
	});


	//=================
	//Menu Toggle
	let iconMenuToggle = document.querySelector(".toggleButton"),
		iconMenuClose = document.querySelector(".toggleMenu__close"),
		menuBodyToggle = document.querySelector(".toggleMenu");
	if (iconMenuToggle != null) {
		let menuBodyToggle = document.querySelector(".toggleMenu");
		iconMenuToggle.addEventListener("click", function (e) {
			iconMenuToggle.classList.toggle("_active");
			menuBodyToggle.classList.toggle("_active");
		});
	}

	function menuClose() {
		iconMenuToggle.classList.remove("_active");
		menuBodyToggle.classList.remove("_active");
	}

	iconMenuClose.addEventListener('click', menuClose);

	// Скрыть меню Toggle при клике вне меню
	let hamburgerToggle = document.querySelector('.toggleButton');
	let menuToggle = document.querySelector('.toggleMenu');

	const toggleMenu2 = () => {
		menuToggle.classList.toggle('_active');
		hamburgerToggle.classList.toggle('_active');
	};

	hamburgerToggle.addEventListener('click', (e) => {
		e.stopPropagation();

	});

	document.addEventListener('click', (e) => {
		let target2 = e.target;
		let its_menu2 = target2 == menuToggle || menuToggle.contains(target2);
		let its_hamburger2 = target2 == hamburgerToggle;
		let menu_is_active2 = menuToggle.classList.contains('_active');

		if (!its_menu2 && !its_hamburger2 && menu_is_active2) {
			toggleMenu2();
		}
	});

	// simpleMenu Hovering
	const simpleMenuItems = document.querySelectorAll('.simpleMenu__item');

	simpleMenuItems.forEach(simpleMenuItem => {
		simpleMenuItem.addEventListener('mouseover', () => {
			simpleMenuItems.forEach(simpleMenuItem => {
				if (simpleMenuItem.classList.contains('_active')) {
					simpleMenuItem.classList.add('_active_return');
				}
				simpleMenuItem.classList.remove('_active');
			});
		});
		simpleMenuItem.addEventListener('mouseout', () => {
			simpleMenuItems.forEach(simpleMenuItem => {
				if (simpleMenuItem.classList.contains('_active_return')) {
					simpleMenuItem.classList.add('_active');
					simpleMenuItem.classList.remove('_active_return');
				}
			});
		});
	});

	// Packages forms
	const packagesBtns = document.querySelectorAll('.packages__btn'),
		packagesTitles = document.querySelectorAll('.packages__title'),
		formInput = document.querySelector('.popup_feedback form input'),
		userView = document.querySelector('.popup__choose span');


	function changeDataaa(i) {
		formInput.value = packagesTitles[i].innerText;
		userView.innerText = packagesTitles[i].innerText;
	}

	packagesBtns.forEach((packageBtn, i) => {
		packageBtn.addEventListener('click', () => {
			changeDataaa(i);
		});
	});

	// Sticky meny
	// let navbar = document.querySelector(".header"),
	// 	navbarHeight = window.getComputedStyle(navbar).height,
	// 	sticky = navbar.offsetTop,
	// 	nextBlock = document.querySelector(".menubar"),
	// 	nextBlockMarginTop = window.getComputedStyle(nextBlock).marginTop;

	// function stickyMenu() {
	// 	window.addEventListener('resize', () => {
	// 		navbarHeight = window.getComputedStyle(navbar).height,
	// 			sticky = navbar.offsetTop,
	// 			nextBlockMarginTop = window.getComputedStyle(nextBlock).marginTop;
	// 	});

	// 	if (window.pageYOffset > sticky) {
	// 		navbar.classList.add("sticky");
	// 		nextBlock.style.marginTop = +nextBlockMarginTop.slice(0, nextBlockMarginTop.length - 2) + +navbarHeight.slice(0, navbarHeight.length - 2) + "px";
	// 	} else {
	// 		navbar.classList.remove("sticky");
	// 		nextBlock.style.marginTop = nextBlockMarginTop;
	// 	}
	// }

	// window.addEventListener('scroll', stickyMenu);
});