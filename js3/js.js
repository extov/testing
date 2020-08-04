$(function (){
	let $p1 = $('.first_tab');
	let $p2 = $('.second_tab');
	let $p3 = $('.third_tab');

	let $pp1 = $('.p1');
	let $pp2 = $('.p2');
	let $pp3 = $('.p3');

	$p1.on('click',  function(){
		$pp1.css('display', 'inline');
		$pp2.css('display', 'none');
		$pp3.css('display', 'none');
	});

	$p2.on('click',  function(){
		$pp1.css('display', 'none');
		$pp2.css('display', 'inline');
		$pp3.css('display', 'none');
	});

	$p3.on('click',  function(){
		$pp1.css('display', 'none');
		$pp2.css('display', 'none');
		$pp3.css('display', 'inline');
	});

	let $show = $('.show');
	console.log($show);
	
});