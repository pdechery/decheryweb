<<<<<<< HEAD
(function($) {

	$.fn.decherySlide = function(defaults){

		var options = {
			slideWidth: 440,
			slideHeight: 510,
			currentPosition: 0,
			navigation: true,
			pagination: false,
			auto: false,
			speed: 500,
			prevIcon: '<i class="fa fa-angle-left fa-lg"></i>',
			nextIcon: '<i class="fa fa-angle-right fa-lg"></i>',
		};

		var config = $.extend(options, defaults||{});

		this.each(function(){

			var obj = this;
			
			var $slideEl = $('.proj img', obj);
			var $navEl = $('.area', obj);

			var total = $slideEl.length;
			var steps = $slideEl.length - 1;
			
			// wrapper
			$slideEl.wrapAll('<div class="slidesHolder"></div>'); // html wrapper dos slides
			
			var $wrapper = $('.slidesHolder', obj); 
			
			$wrapper.css('width', config.slideWidth * total);

			function moveSlide(dir) {
				var ponteiro = config.currentPosition;
				switch(dir) {
					case "next":
						config.currentPosition = (ponteiro >= steps) ? steps : ponteiro + 1;
						break; 
					case "prev":
						config.currentPosition = (ponteiro <= 0) ? 0 : ponteiro - 1;
						break; 
					default:
						break; 
				};
				$wrapper.animate({'marginLeft' : config.slideWidth*(-config.currentPosition)});
				setActive(config.currentPosition); 	// atualiza bullet da paginação
			}

			function setActive(number) {
				console.log('number: '+number+' steps: '+steps+' currpos: '+config.currentPosition);
				if(config.pagination) {
					var current = number > -1 ? number : 0;
					$(".active", $pagination).removeClass("active");
					$("li:eq(" + current + ") a", $pagination).addClass("active");
				}

				if(number === steps) {
					$('a.nextImg',obj).addClass('off');
					$('a.prevImg',obj).removeClass('off');
				} else if(number < steps && number !== 0) {
					$('a.nextImg',obj).removeClass('off');
					$('a.prevImg',obj).removeClass('off');
				} else if(number === 0) {
					$('a.nextImg',obj).removeClass('off');
					$('a.prevImg',obj).addClass('off');
				}

			}

			//navigation
			if(config.navigation) {

				if(config.navigation) {
					$navWrap = $('<div class="navigation"></div>').prependTo($($navEl, obj)); // html wrapper da navegação  
				}

				var html = ' <a class="prevImg">'+ config.prevIcon +'</a>';
				html += ' <a class="nextImg">'+ config.nextIcon +'</a>';
				
				$navWrap.prepend(html);

				$('a.prevImg', obj).click(function() {		
					moveSlide('prev');
				});
				$('a.nextImg', obj).click(function() {		
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

				var $pagination = $("<ul>", {"id": "slidenav", "class": "clearfix"}).prependTo(this);
				
				$.each(new Array(total), function(i) {

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
		
		});

	};

=======
(function($) {

	$.fn.decherySlide = function(defaults){

		var options = {
			slideWidth: 440,
			slideHeight: 510,
			currentPosition: 0,
			navigation: true,
			pagination: false,
			auto: false,
			speed: 500,
			prevIcon: '<i class="fa fa-angle-left fa-lg"></i>',
			nextIcon: '<i class="fa fa-angle-right fa-lg"></i>',
		};

		var config = $.extend(options, defaults||{});

		this.each(function(){

			var obj = this;
			
			var $slideEl = $('.proj img', obj);
			var $navEl = $('.area', obj);

			var total = $slideEl.length;
			var steps = $slideEl.length - 1;
			
			// wrapper
			$slideEl.wrapAll('<div class="slidesHolder"></div>'); // html wrapper dos slides
			
			var $wrapper = $('.slidesHolder', obj); 
			
			$wrapper.css('width', config.slideWidth * total);

			function moveSlide(dir) {
				var ponteiro = config.currentPosition;
				switch(dir) {
					case "next":
						config.currentPosition = (ponteiro >= steps) ? steps : ponteiro + 1;
						break; 
					case "prev":
						config.currentPosition = (ponteiro <= 0) ? 0 : ponteiro - 1;
						break; 
					default:
						break; 
				};
				$wrapper.animate({'marginLeft' : config.slideWidth*(-config.currentPosition)});
				setActive(config.currentPosition); 	// atualiza bullet da paginação
			}

			function setActive(number) {
				console.log('number: '+number+' steps: '+steps+' currpos: '+config.currentPosition);
				if(config.pagination) {
					var current = number > -1 ? number : 0;
					$(".active", $pagination).removeClass("active");
					$("li:eq(" + current + ") a", $pagination).addClass("active");
				}

				if(number === steps) {
					$('a.nextImg',obj).addClass('off');
					$('a.prevImg',obj).removeClass('off');
				} else if(number < steps && number !== 0) {
					$('a.nextImg',obj).removeClass('off');
					$('a.prevImg',obj).removeClass('off');
				} else if(number === 0) {
					$('a.nextImg',obj).removeClass('off');
					$('a.prevImg',obj).addClass('off');
				}

			}

			//navigation
			if(config.navigation) {

				if(config.navigation) {
					$navWrap = $('<div class="navigation"></div>').prependTo($($navEl, obj)); // html wrapper da navegação  
				}

				var html = ' <a class="prevImg">'+ config.prevIcon +'</a>';
				html += ' <a class="nextImg">'+ config.nextIcon +'</a>';
				
				$navWrap.prepend(html);

				$('a.prevImg', obj).click(function() {		
					moveSlide('prev');
				});
				$('a.nextImg', obj).click(function() {		
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

				var $pagination = $("<ul>", {"id": "slidenav", "class": "clearfix"}).prependTo(this);
				
				$.each(new Array(total), function(i) {

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
		
		});

	};

>>>>>>> 8e23eba0e750ea528a4ed88045a1000eccbc12ae
 })(jQuery);