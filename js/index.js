const btn = document.querySelector('.btn a');
const contentArea = document.querySelector('#content');
const en = contentArea.querySelector('#en');
const pt_br = contentArea.querySelector('#pt');
const lang_switch = document.querySelector('#lang_switch');
const aside = document.querySelector('aside');
const icones = document.querySelector('ul#icones');

let is_english = 0;

btn.addEventListener('click', (el) => {

	window.scrollTo({
		top: contentArea.offsetTop,
		left: 0,
		behavior: 'smooth'
	});

	setInterval(function(){
		lang_switch.className = 'show';
	}, 800);

});

lang_switch.addEventListener('click', (el) => {

	en.className = 'show';
	pt_br.className = 'hidden';

})