$(function() {

	// animação divs
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
			$('html, body').animate({scrollTop: $panel.offset().top}, 600, 'swing')
		});

	});

	// troca estilos
	$('#switch span').click(function(){
		var choice = this.className;
		$('#style').attr('href', 'style/'+choice+'.css');
	});

	// botão subir
	$('#down a').hover(function() {
		$('#down .tooltip').toggle();
	});

	// troca conteúdo
	var $nav = $('#nav .cell a').add('#bio a');
	
	$nav.click(function(e) {
		
		var id = $(this).attr('data-target');

		console.log(id);

		if (id == "bio" || id == "skill") {
			e.preventDefault();
		};
		
		$nav.removeClass('ativo');
		$('#bio,#skill').hide();
		$('#'+id).toggle();
		$nav.filter(function(){ return $(this).attr('data-target') == id }).addClass('ativo');
	
	}).hover(function(){
		
		var id = $(this).attr('data-target');
		
		if($('#'+id).css('display') != 'block') {
			$(this).toggleClass('ativo');
		}
	
	});
	
	$nav.filter(function(){ return $(this).attr('data-target') == "bio" }).trigger('click');

	// tremida na setinha
	jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
		this.each(function() {
			$(this).css("position","relative"); 
			for (var x=1; x<=intShakes; x++) {
				$(this).animate({top:(intDistance*-1)}, (((intDuration/intShakes)/4)))
				.animate({top:intDistance}, ((intDuration/intShakes)/2))
				.animate({top:0}, (((intDuration/intShakes)/4)));
			}
		});
		return this;
	};

	$("#down a").hover(function(){
		$("#down a").shake(1,7,500);
	});

});