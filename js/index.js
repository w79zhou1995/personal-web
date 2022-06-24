const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})

/*
var header = document.getElementById("");
var yPos = header.offsetTop;

window.onscroll = () => {
	if (window.pageYOffset > yPos) {
		header.classList.add("sticky")
	} else {stick
		header.classList.remove("sticky")
	}
}



var page = document.querySelector('body');
var scroll = window.scrollTop() + (window.height() / 1.5);
var panels = document.querySelectorAll('.panel')


window.onscroll ( function() {

panel.forEach(function() {
	if (this.position().top <= scroll && this.position().top + this.height() > scroll) {

		page.classList.remove (function(index, css) {
			return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
		});


		page.classList.add ('color-' + this.data('color'));
	}
	
});
}); */

