/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

let btn_prev = document.querySelector('.wrap-carousel .carousel .btnWrap .btn-prev');
let btn_next = document.querySelector('.wrap-carousel .carousel .btnWrap .btn-next');
let images = document.querySelectorAll('.carousel .carousel-container .carousel-slide img');

let i = 0;
images[i].style.display = 'first-child';
i++ ;
if(i >= images.length){
    i = 0; // переменная i равна 0
}

btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}

btn_next.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}

function imgsrc(){
  images[i].style.display = 'none';
  i = i - 1;
  if(i < 0){
      i = images.length - 1;
  }
  images[i].style.display = 'block';
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides-review");
  var dots = document.getElementsByClassName("dot-review");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//let plus = document.querySelectorAll('[class='plus-opportunities']');
//  console.log(plus.length);

//    console.log('Кнопка нажата!');});

//let plus = document.getElementsByClassName(".plus-opportunities");
//let text = document.querySelector(".text-opportunities");

//plus.onclick = function() {
//console.log('Кнопка нажата!');};
