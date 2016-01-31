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
		$nav.eq(el).trigger('click') // deixa visivel a bio
	}

	$(document).ready(function(){

		var nav = !mobile ? '#main #nav' : '#main a#icon'

		$('nav ul li a, #bio a').showDivs(0)

		$('.btn:first').on('click', function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionDown();
		})

		$('.btn:eq(1)').on('click', function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionUp();
		})

		 $('#wrap').fullpage({
		 	sectionSelector: '.panel',
		 	verticalCentered: false,
		 	css3: true,
		 	afterLoad: function(anchorLink, index){
		 		var loadedSection = $(this);
		 		if (index == 1) {
		 			$('.eu').hide()
					$('#bio').toggle()
					$('nav ul li a').removeClass('ativo').filter('[data-target="bio"]').addClass('ativo')
		 		};
				if(index == 2){
					window.setTimeout(function(){
						$(nav).fadeIn();
					}, 200)
				}
			},
			onLeave: function(index, nextIndex, direction){
				if(index == 2) {
					$(nav).fadeOut();
				}
			}
		 });

		var platform = navigator.userAgent.toLowerCase()
		var mobile = platform.match(/(iphone|ipod|ipad|android)/)

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
	
	})

 })(jQuery)