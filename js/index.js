(function($) {

	// troca conteúdo na seção #eu
	$.fn.showDivs = function(el) {
		var $nav = $('nav ul li a')
		this.click(function(e){
			var id = $(this).attr('data-target') || 0 // link do portfolio não tem mais o atributo.
			if(id != 0) {
				e.preventDefault()
				$nav.removeClass('ativo')
				$('.eu').hide()
				$('#'+id).toggle()
				$nav.filter(function(){return $(this).attr('data-target') == id}).addClass('ativo')
			}
		})
		$nav.eq(el).trigger('click')
	}

	$(document).ready(function(){

		// efeito thumbnails works
		$('.thumb').hover(function() {
			//$('.caption', this).toggle()
		})

		// control lightbox
		$('#portfolio p a, .thumb .caption a').click(function(e){
			e.preventDefault()
			var site = $(this).attr('href')
			$('.lightbox').hide()
			$('section'+site).fadeIn()
		})

		$('.lightbox .close a').click(function(e){
			e.preventDefault()
			$('.lightbox').hide()
		})

		// scroll
		var $btns = $('.btn')

		$btns.each(function() {
			var $target = $('a', this).attr('href')
			var $panel = $('section'+$target)
			$('a',this).click(function(e) {
				e.preventDefault()
				$('html, body').animate({scrollTop: $panel.offset().top}, 600, 'swing')
			})
		})

		var platform = navigator.userAgent.toLowerCase()
		var mobile = platform.match(/(iphone|ipod|ipad|android)/)

		var nav = !mobile ? '#main #nav' : '#main a#icon'

		//console.log(platform+' '+nav)

		$(window).scroll(function() {
			if($(window).scrollTop() === $('#main').offset().top) {
				$(nav).fadeIn()
			} else {
				$(nav).fadeOut()
			}
		})

		if(mobile) {
			$('a#icon').click(function(e){
				e.preventDefault()
				$('#nav-mobile').toggle()
			})
		}

		$('nav ul li a, #bio a').showDivs(0)
	
	})

 })(jQuery)