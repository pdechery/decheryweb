$(function($) {

	// controle show/hide da área do site quando volta para inicio
	$('a[href="#main-panel"]').click(function() {
		$('.site').hide();
	});

	// links nos thumbs abrem respectivo projeto
	$('.thumb').hover(function() {
		$(this).find('.caption').toggle();
	});

	// navegação trabalhos
	$('.caption a').click(function(){
		var site = $(this).attr('href');
		$('.site').hide();
		$('section'+site).show();
	});

	// one page navigatin
	_window = $(window);

	var $panels = $('.panel');

	$panels.css({
		minHeight:_window.height(),
		width:_window.width()
	})

	$panels.each(function() {

		var $panel = $(this);
		var hash = '#' + this.id;

		$('a[href="' + hash + '"]').click(function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: $panel.offset().top}, 600, 'swing');
		});

	});

	// troca estilos
	$('#switch span').click(function(){
		var choice = this.className;
		$('#style').attr('href', 'style/'+choice+'.css');
	});

	// tooltip no botão da navegação
	// $('#down a').hover(function() {
	// 	$('#down .tooltip').toggle();
	// });

	// troca conteúdo na seção #eu
	$.fn.showDivs = function(el) {
		var $nav = $('#nav .cell a');
		this.click(function(e){
			var id = $(this).attr('data-target') || 0; // link do portfolio não tem mais o atributo.
			if(id != 0) {
				e.preventDefault();
				$nav.removeClass('ativo');
				$('.eu').hide();
				$('#'+id).toggle();
				$nav.filter(function(){return $(this).attr('data-target') == id}).addClass('ativo');
			}
		});
		$nav.eq(el).trigger('click');
	}

	$('#nav .cell a, #bio a, .back-to-bio a').showDivs(0);


	// tremida na setinha
	$.fn.shake = function(intShakes, intDistance, intDuration) {
		this.each(function() {
			$(this).css("position","relative"); 
			for (var x=1; x<=intShakes; x++) {
				$(this).animate({top:(intDistance*-1)}, (((intDuration/intShakes)/4)))
				.animate({top:intDistance}, ((intDuration/intShakes)/2))
				.animate({top:0}, (((intDuration/intShakes)/4)));
			}
		});
		return this;
	}

	$(".down a").hover(function(){
		$("i", $(this)).shake(2,3,500);
	});

	// show/hide info projetos
	$('.label a').click(function() {
		$('.proj .info').toggle();
	});

 })(jQuery);