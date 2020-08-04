$(function() {
	var $links = $('.menu li ');

	$links.hover( function(e){
		let $submenu = $(this).find('.submenu');
		e.preventDefault();
		$submenu.slideToggle();
	});

});

