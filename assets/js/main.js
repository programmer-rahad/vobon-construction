(function ($) {
	"use strict";

	// Preloader

	$(window).load(function () {
		$("#preloader").fadeOut("slow", function () {
			$(this).remove();
		});
	});

	$(document).ready(function () {
		/* Popup Search */
		$(".popup-search").on("click", function () {
			$("#search").addClass("search-on");
		});
		$(".cross").on("click", function () {
			$("#search").removeClass("search-on");
		});

		/* Responsive Navigation */
		$(".toggle-menu").on("click", function () {
			$("nav.main-menu").slideToggle();
		});
		$("li.v-dropdown-menu").on("click", function () {
			$("li.v-mega-menu").children(".row").slideUp();
			$("li.v-dropdown-menu").not(this).children("ul").slideUp();
			$(this).children("ul").slideToggle();
		});
		$("li.v-mega-menu").on("click", function () {
			$("li.v-dropdown-menu").children("ul").slideUp();
			$(this).children(".row").slideToggle();
		});

		// Slider Carousel
		$("#slider-section .slider-wrap").owlCarousel({
			items: 1,
			loop: true,
			mouseDrag: false,
			nav: true,
			navText: [
				'<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>',
				'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>',
			],
		});

		// Team Carousel
		$(".team-carousel").owlCarousel({
			items: 4,
			margin: 20,
			loop: true,
			mouseDrag: true,
			autoplay: false,
			autoplayTimeout: 2000,
			smartSpeed: 1000,
			nav: true,
			dots: false,
			navText: [
				'<i class="fa fa-angle-left" aria-hidden="true"></i>',
				'<i class="fa fa-angle-right" aria-hidden="true"></i>',
			],
			responsive: {
				0: {
					items: 1,
					center: false,
				},
				480: {
					items: 2,
					center: false,
				},
				768: {
					items: 3,
				},
				1200: {
					items: 4,
				},
			},
		});

		// Testimonial Carousel
		$(".testimonial-carousel").owlCarousel({
			items: 1,
			margin: 20,
			loop: true,
			mouseDrag: true,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
			nav: true,
			dots: false,
			navText: [
				'<i class="fa fa-angle-down" aria-hidden="true"></i>',
				'<i class="fa fa-angle-up" aria-hidden="true"></i>',
			],
		});

		// Client Carousel
		$(".clients.owl-carousel").owlCarousel({
			items: 5,
			margin: 30,
			loop: true,
			mouseDrag: true,
			autoplay: true,
			autoplayTimeout: 2000,
			smartSpeed: 1000,
			dots: false,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 2,
					center: false,
				},
				480: {
					items: 3,
					center: false,
				},
				768: {
					items: 4,
				},
				992: {
					items: 5,
				},
			},
		});

		// Date Picker
		$(".input-group.date").datepicker({
			format: "dd.mm.yyyy",
		});

		/* Counter Up */
		$(".counter").counterUp({
			delay: 10,
			time: 3000,
		});

		// Textition
		if ($("#hero-section .changing-title").length) {
			$("#hero-section .changing-title").textition({
				handler: false,
				animation: "ease-in-out",
				speed: 1.5,
				interval: 3.5,
				autoplay: true,
				map: {
					x: 1000,
					y: 500,
					z: 500,
				},
			});
		}

		// Filterizr
		if ($("#project-section .projects").length) {
			$("#project-section .projects").filterizr();
			$("#project-section .project-nav li").on("click", function () {
				$("#project-section .project-nav li").removeClass("active");
				$(this).addClass("active");
			});
		}

		// Scroll To Top

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$("#scroll-2-top").fadeIn();
			} else {
				$("#scroll-2-top").fadeOut();
			}
		});
		$("#scroll-2-top").click(function () {
			$("html,body").animate(
				{
					scrollTop: 0,
				},
				600
			);
			return false;
		});
	});
})(jQuery);

/**
 * Custom JS
 */

// Sticky Navigation

(function () {
	var sliderSection = document.querySelector('section#slider-section');
	var mainHeader = document.querySelector('header#header-section');
	var headerTop = document.querySelector('.header-top');
	console.log(headerTop.offsetHeight);
	window.addEventListener("scroll", function () {
		if(scrollY > headerTop.offsetHeight) {
			mainHeader.style.position = 'fixed';
			mainHeader.style.top = -headerTop.offsetHeight + 'px';
			sliderSection.style.marginTop = mainHeader.offsetHeight + 3 + 'px';
		} else {
			mainHeader.style.position = 'relative';
			mainHeader.style.top = '0';
			sliderSection.style.marginTop = '0px';
		}
	});
})();
