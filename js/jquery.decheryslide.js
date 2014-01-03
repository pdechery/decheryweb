(function($) {

	$.fn.decherySlide = function(options){

		var config = $.extend({
			slideWidth: 440,
			slideHeight: 510,
			currentPosition: 0,
			navigation: true,
			pagination: false,
			auto: false,
			speed: 500,
			prevIcon: '<i class="fa fa-angle-left fa-lg"></i>',
			nextIcon: '<i class="fa fa-angle-right fa-lg"></i>',
		}, options||{});

		// elemento passado na chamada do plugin
		config.container = this;

		// slides
		config.slides$ = $(config.slideEl, config.container);
		config.slides$.total = config.slides$.length;
		config.slides$.steps = config.slides$.length - 1;

		// wrapper
		config.slides$.wrapAll('<div class="slidesHolder"></div>'); // html wrapper dos slides
		config.wrapper$ = $('.slidesHolder'); 
		config.wrapper$.css('width', config.slideWidth * config.slides$.total);

		function moveSlide(dir) {
			console.log(dir);
			var ponteiro = config.currentPosition;
			switch(dir) {
				case "next":
					config.currentPosition = (ponteiro >= config.slides$.steps) ? config.slides$.steps : ponteiro + 1;
					break; 
				case "prev":
					config.currentPosition = (ponteiro <= 0) ? 0 : ponteiro - 1;
					break; 
				default:
					break; 
			};
			config.wrapper$.animate({'marginLeft' : config.slideWidth*(-config.currentPosition)});
			setActive(config.currentPosition); 	// atualiza bullet da paginação
		}

		function setActive(number) {
			var current = number > -1 ? number : 0;
			$(".active", $pagination).removeClass("active");
			$("li:eq(" + current + ") a", $pagination).addClass("active");
		}

		//navigation
		if(config.navigation) {

			config.navWrapper$ = $('<div class="navigation"></div>').prependTo($(config.navEl, config.container)); // html wrapper da navegação  

			var html = ' <a class="prevImg">'+ config.prevIcon +'</a>';
			html += ' <a class="nextImg">'+ config.nextIcon +'</a>';
			
			config.navWrapper$.prepend(html);

			$('a.prevImg').click(function() {		
				moveSlide('prev');
			});
			$('a.nextImg').click(function() {		
				moveSlide('next');				
			})

		}

		if(config.auto) {
			var roda = function() {
				moveSlide('next');
			}
			setInterval(roda, 2600);
		}

		//pagination
		if(config.pagination) {

			var $pagination = $("<ul>", {"id": "slidenav", "class": "clearfix"}).prependTo(config.container);
			
			$.each(new Array(config.slides$.total), function(i) {

				var paginationItem, paginationLink;
				
				paginationItem = $("<li>").appendTo($pagination);
				
				paginationLink = $("<a>", {
					href: "#",
					"item": i,
					"class": i == 0 ? 'active' : ''
				}).appendTo(paginationItem);
			
				return paginationLink.click(function(e) {
					var currPos;
					e.preventDefault();
					currPos = $(e.currentTarget).attr("item");
					config.currentPosition = parseInt(currPos); // altera o currentPosition, e transforma currPos em número inteiro
					moveSlide(currPos);
				});
			
			})

		}

	};

 })(jQuery);