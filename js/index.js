const btn = document.querySelector('.btn a');
const contentArea = document.querySelector('#content');
const en = contentArea.querySelector('#en');
const pt_br = contentArea.querySelector('#pt');
const lang_switch = document.querySelector('#lang_switch');
const lang_switch_mobile = document.querySelector('#lang_switch_mobile');
const aside = document.querySelector('aside');
const icones = document.querySelector('ul#icones');

let is_english = false;

window.onload = () => lang_switch.className = 'hidden';

function contentOnTop() {
	window.scrollTo({
		top: contentArea.offsetTop,
		left: 0,
		behavior: 'smooth'
	});
}

btn.addEventListener('click', (ev) => {

	contentOnTop();

	setTimeout(function(){
		lang_switch.className = 'show';
	}, 800);

});

function switchLang(ev) {

	console.log(ev)

	ev.preventDefault();

	contentOnTop();

	if(is_english) {
		pt_br.className = 'show';
		en.className = 'hidden';
		ev.srcElement.innerHTML = 'EN';
		is_english = false;
		return true;
	}

	is_english = true;

	en.className = 'show';
	pt_br.className = 'hidden';
	ev.srcElement.innerHTML = 'PT';
	return true;

}

lang_switch.addEventListener('click', switchLang);
lang_switch_mobile.addEventListener('click', switchLang);