(function($) {

	var currentPosition = 0;
	var slideWidth = 610;
	var slideHeight = 230;
	var $slides = $('.site');
	var numberOfSlides = $slides.length;
	var $container = $('#work .code');

	$slides.wrapAll('<div id="slidesHolder"></div>');

	$('#slidesHolder').css('width', slideWidth * numberOfSlides);

	$slides
	.prepend('<span class="nav" id="leftNav"><i class="arrow"></i></span>')
	.append('<span class="nav" id="rightNav"><i class="arrow"></i></span>');

	function moveSlide() {
		$('#slidesHolder').animate({'marginLeft' : slideWidth*(-currentPosition)});
	}

	function setActive(number, el) {
		current = number > -1 ? number : 0;
		$(".active", el).removeClass("active");
		$("li:eq(" + current + ") a", el).addClass("active");
	}

	//pagination
	pagination = $("<ul>", {"id": "slidenav", "class": "clearfix"}).appendTo($container);
	
	$.each(new Array(numberOfSlides), function(i) {
		
		var paginationItem, paginationLink;
		
		paginationItem = $("<li>").appendTo(pagination);
		
		paginationLink = $("<a>", {
			href: "#",
			"item": i,
			"class": i == 0 ? 'active' : ''
		}).appendTo(paginationItem);
	
		return paginationLink.click(function(e) {
			var currPos;
			e.preventDefault();
			currPos = $(e.currentTarget).attr("item");
			currentPosition = currPos;
			moveSlide();
			setActive(currPos, pagination);
		});
	
	});

 })(jQuery);