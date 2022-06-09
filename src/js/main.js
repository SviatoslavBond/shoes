$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.footer__burger').click(function (event) {
		$('.footer__burger,.footer__menu').toggleClass('footer-active');
		$('body').toggleClass('lock');
	});

});
