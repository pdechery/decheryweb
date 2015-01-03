// PLUGIN SLIDESHOW DECHERYWEB
// Início desenvolvimento: 2/1/2015

// Código de acordo com pattern de desenvolvimento de plugin para jquery
// Referência: http://debuggable.com/posts/how-to-write-jquery-plugins:4f72ab2e-7310-4a74-817a-0a04cbdd56cb

(function($, doc, win) {

	// função construtora que será instanciada na invocação do plugin
	// cria propriedades para os elementos DOM usados no plugin e os parâmetros 
	function DecherySlide(el, opts) {

		// opções default
		this.defaults = {
			slideWidth: 440,
			slideHeight: 510,
			currentPosition: 0,
			navigation: true,
			pagination: false,
			auto: false,
			speed: 500,
			imgs: '.proj img', // classe das imagens da galeria
			parentEl: '.area', // container
			prevIcon: '<i class="fa fa-angle-left fa-lg"></i>',
			nextIcon: '<i class="fa fa-angle-right fa-lg"></i>'
		};

		this.el = el; // projeto onde vai ser aplicado o plugin

		this.opts = $.extend(this.defaults, opts); // parâmetros
		
		this.$slideImgs = $(this.opts.imgs, el); // imagens do projeto

		this.$prtEl = $(this.opts.parentEl, el); // parent das imagens do projeto

		this.total = this.$slideImgs.length; // total de slides
		
		this.steps = this.$slideImgs.length - 1;
		
		// iniciando o plugin com o método 'init', declarado logo abaixo
		this.init();

	}

	DecherySlide.prototype.init = function() {

		var self = this;

		this.$slideImgs.wrapAll('<div class="slidesHolder"></div>'); // html wrapper dos slides
		
		this.$wrapper = $('.slidesHolder', this.el);
		
		this.$wrapper.css('width', this.opts.slideWidth * this.total);

		if(this.opts.pagination) {
			this.$pagination = $("<ul>", {"id": "slidenav", "class": "clearfix"}).prependTo($(this.$prtEl, this.el)); // wrapper paginação bullets
			this.setPagination();
		}

		if(this.opts.navigation) this.setNavigation();

		if(this.opts.auto) {
			var roda = function() {
				self.moveSlide('next');
			}
			setInterval(roda, 2600);
		}

	}

	// a função que anima os slides
	DecherySlide.prototype.moveSlide = function(dir) {
		
		var ponteiro = this.opts.currentPosition;
		
		switch(dir) {
			case "next":
				this.opts.currentPosition = (ponteiro >= this.steps) ? this.steps : ponteiro + 1;
				break; 
			case "prev":
				this.opts.currentPosition = (ponteiro <= 0) ? 0 : ponteiro - 1;
				break; 
			default:
				break; 
		};
		
		this.$wrapper.animate({'marginLeft' : this.opts.slideWidth*(-this.opts.currentPosition)});
		
		if(this.opts.pagination) this.setActive(this.opts.currentPosition); // atualiza bullet da paginação
	
	}

	DecherySlide.prototype.setActive = function(number) {
		
		if(this.opts.pagination) {
			var current = number > -1 ? number : 0;
			$(".active", this.$pagination).removeClass("active");
			$("li:eq(" + current + ") a", this.$pagination).addClass("active");
		}

		if(number === this.steps) {
			$('a.nextImg',this.el).addClass('off');
			$('a.prevImg',this.el).removeClass('off');
		} else if(number < this.steps && number !== 0) {
			$('a.nextImg',this.el).removeClass('off');
			$('a.prevImg',this.el).removeClass('off');
		} else if(number === 0) {
			$('a.nextImg',this.el).removeClass('off');
			$('a.prevImg',this.el).addClass('off');
		}

	}

	DecherySlide.prototype.setNavigation = function() {

		var $navWrap = $('<div class="navigation"></div>').prependTo($(this.$prtEl, this.el)); // html wrapper da navegação 

		var html = ' <a class="prevImg">'+ this.opts.prevIcon +'</a>';
		html += ' <a class="nextImg">'+ this.opts.nextIcon +'</a>';
		
		$navWrap.prepend(html);

		var self = this;

		$('a.prevImg', this.el).click(function() {		
			self.moveSlide('prev');
		});
		$('a.nextImg', this.el).click(function() {
			self.moveSlide('next');		
		})

	}

	DecherySlide.prototype.setPagination = function() {

		var self = this;

		$.each(new Array(this.total), function(i) {

			var paginationItem, paginationLink;
			
			paginationItem = $("<li>").appendTo(self.$pagination);
			
			paginationLink = $("<a>", {
				href: "#",
				"item": i,
				"class": i == 0 ? 'active' : ''
			}).appendTo(paginationItem);

			return paginationLink.click(function(e) {
				var currPos;
				e.preventDefault();
				currPos = $(e.currentTarget).attr("item");
				self.opts.currentPosition = parseInt(currPos); // altera o currentPosition, e transforma currPos em número inteiro
				self.moveSlide(currPos);
			});
		
		})
	}
		

	$.fn.decherySlide = function(opts) {
		
		return this.each(function() {
			new DecherySlide(this, opts);
		});
	
	};

 })(jQuery, document, window);
