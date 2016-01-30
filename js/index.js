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
				$(nav).fadeIn().css('display','block')
			} else {
				if (!mobile) $(nav).fadeOut()
			}
			if($(window).scrollTop() === $('#cover').offset().top) {
				$('.eu').hide()
				$('#bio').toggle()
				$('nav ul li a').removeClass('ativo').filter('[data-target="bio"]').addClass('ativo')
			} 
		})

		if(mobile) {
			var iconmenu = document.querySelector('a#icon')
			var main = document.querySelector('#main')
			main.addEventListener('click', function(e){
				e.preventDefault()
				if (e.target === iconmenu) {
					$('html, body').animate({scrollTop: $('#main').offset().top}, 200, 'swing')
					$('#nav-mobile').show()
				} else {
					$('#nav-mobile').toggle()
				}
			})
		}

		$('nav ul li a, #bio a').showDivs(0)
	
	})

 })(jQuery)