
function activarMenu(){
	var lineDrawing = anime({
	  targets: '#lineDrawing .lines line ',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 500,
	  delay: function(el, i) { return i * 250 },
	  direction: 'alternate',
	  loop: false
	});

	var lineDrawingB = anime({
	  targets: '#lineDrawing .lines path ',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 500,
	  delay: function(el, i) { return i * 250 },
	  direction: 'alternate',
	  loop: false
	});

	var lineDrawingC = anime({
	  targets: '#lineDrawing .lines polyline ',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 500,
	  delay: function(el, i) { return i * 250 },
	  direction: 'alternate',
	  loop: false
	});
}
