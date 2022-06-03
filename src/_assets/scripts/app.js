'use strict';

// cards redundant click, accessible whole card clickable solution by Heydon Pickering

const cards = [...document.querySelectorAll('.card')];
cards.forEach(card => {
	card.style.cursor = 'pointer';
	let down,
		up,
		link = card.querySelector('a');
	card.onmousedown = () => (down = +new Date());
	card.onmouseup = () => {
		up = +new Date();
		if (up - down < 200) {
			link.click();
		}
	};
});
