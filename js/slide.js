$(function(){

	var currentPosition = 0;
	var slideWidth = 610;
	var $slides = $('.site');
	var numberOfSlides = $slides.length;
	var $container = $('#work .code');

	$slides.wrapAll('<div id="slidesHolder"></div>');

	$('#slidesHolder').css('width', slideWidth * numberOfSlides);

	function moveSlide() {
		$('#slidesHolder').animate({'marginLeft' : slideWidth*(-currentPosition)});
		//console.log(currentPosition);
	}

	function setActive(number, el) {
		current = number > -1 ? number : 0;
		$(".active", el).removeClass("active");
		$("li:eq(" + current + ") a", el).addClass("active");
	}

	// se houvesse botões de next / previous
	// $('#slidenav span').click(function() {	
	// 	currentPosition = ($(this).attr('id')=='right') ? currentPosition + 1 : currentPosition -1 ;
	// 	moveSlide();
	// });

	//pagination
	pagination = $("<ul>", {"id": "slidenav", "class": "clearfix"}).appendTo($container);
	
	$.each(new Array(numberOfSlides), function(i) {
		
		var paginationItem, paginationLink;
		
		paginationItem = $("<li>").appendTo(pagination);
		
		paginationLink = $("<a>", {
			href: "#",
			"item": i,
			"class": i == 0 ? 'active' : ''
		}).appendTo(paginationItem);;
	
		return paginationLink.click(function(e) {
			var currPos;
			e.preventDefault();
			currPos = $(e.currentTarget).attr("item");
			currentPosition = currPos;
			moveSlide();
			setActive(currPos, pagination);
		});
	
	});

});