(function () {
	console.log('Whoop!');

	var carouselContainer = document.querySelector('.carousel-container');
	var items = carouselContainer.querySelectorAll('.carousel-content li');
	var counter = 0;
	var total = items.length;
	var current = items[0];
	function navigate(direction) {
		current.classList.remove('current');
		counter += direction;
		// Handle edge cases
		if (direction === -1 && counter < 0) {
			counter = amount - 1;
		}
		if (direction === 1 && !items[counter]) {
			counter = 0;
		}
		current = items[counter];
		current.classList.add('current');
	}

	function autoplay() {
		navigate(1);
	}

	setInterval(autoplay, 3000);
})();
