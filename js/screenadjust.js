$(document).ready(function() {
	$('.home-background').css('min-height', $(window).innerHeight());
	$('.home').css('height',$(window).innerHeight());
	$('.about-me').css('height',$(window).innerHeight());
	$('#resume').css('height',$(window).innerHeight());
	$('#contact').css('height',$(window).innerHeight());
});

function autoresize() {
	$('.home').css('height',$(window).innerHeight());
	$('.home-background').css('min-height', $(window).innerHeight());
	$('.about-me').css('height',$(window).innerHeight());
	$('#resume').css('height',$(window).innerHeight());
	$('#contact').css('height',$(window).innerHeight());
}