const btn = document.querySelector('.btn a');
const contentArea = document.querySelector('#content');

btn.addEventListener('click', (el) => {

	window.scrollTo({
		top: contentArea.offsetTop,
		left: 0,
		behavior: 'smooth'
	});

})