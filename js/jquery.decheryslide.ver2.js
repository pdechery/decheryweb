// PLUGIN SLIDESHOW DECHERYWEB
// Código de acordo com pattern de desenvolvimento de plugin para jquery
// encontrado em: http://debuggable.com/posts/how-to-write-jquery-plugins:4f72ab2e-7310-4a74-817a-0a04cbdd56cb
// Início desenvolvimento: 2/1/2015

(function($, doc, win) {

	// função construtora que será instanciada na invocação do plugin mais tarde
	// esta função irá declarar variáveis para todos objetos jquery usados no plugin
	// assim como os parâmetros passados a cada invocação.
	function decherySlide(el, opts) {

		// opções default do plugin
		this.defaults = {
			slideWidth: 440,
			slideHeight: 510,
			currentPosition: 0,
			navigation: true,
			pagination: false,
			auto: true,
			speed: 500,
			el: '.proj img',
			prtel: '.area',
			prevIcon: '<i class="fa fa-angle-left fa-lg"></i>',
			nextIcon: '<i class="fa fa-angle-right fa-lg"></i>'
		};

		// criando objeto jquery com o elemento no qual o plugin será aplicado
		this.$el = $(el);

		this.el = el;

		// objeto que mescla opções default com as do usuário
		this.opts = $.extend(this.defaults, opts);
		
		// elementos DOM/objetos jQuery
		
		this.$slideEl = $(this.opts.el, el); // elemento contendo o html aonde será aplicada a animação

		this.$navEl = $(this.opts.prtel, el); // elemento que contém a "área total" usada na lógica da navegação

		this.total = this.$slideEl.length; // número total de elementos que vão virar slides
		
		this.steps = this.$slideEl.length - 1; // número total menos 1

		
		// iniciando o plugin com o método 'init', declarado logo abaixo, com o prototype.
		this.init();

	}

	// lógica do plugin
	decherySlide.prototype.init = function() {

		var self = this;

		// criando um wrapper e definindo seus atributos (width)
		this.$slideEl.wrapAll('<div class="slidesHolder"></div>'); // html wrapper dos slides
		
		this.$wrapper = $('.slidesHolder', this.el);
		
		this.$wrapper.css('width', this.opts.slideWidth * this.total);

		// auto execução (opcional)
		if(this.opts.auto) {
			var roda = function() {
				self.moveSlide('next');
			}
			setInterval(roda, 2600);
		}

	}

	// a função que anima os slides
	decherySlide.prototype.moveSlide = function(dir) {
		
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
		
		// if(this.opts.pagination) setActive(this.opts.currentPosition); atualiza bullet da paginação
	
	}

	$.fn.decherySlide = function(opts) {
		
		return this.each(function() {
			new decherySlide(this, opts);
		});
	
	};

 })(jQuery, document, window);