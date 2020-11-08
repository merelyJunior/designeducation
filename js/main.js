// Header sticky
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("header--sticky");
    }
    else{
    $('header').removeClass("header--sticky");
    }
    });

// slider student works and adaptive for teachers block
$(document).ready(function(){
  $('.student-works-slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      slidesToShow:2,
      speed:600,
      infinite:true,
      autoplay:false,
      autoplaySpeed:1700,
      pauseOnFocus:true,
      pauseOnHover:true,
      pauseOnDotsHover:true,
      draggable:false,
      touchMove:false
      
  });

  $('.teachers-content__slider-adaptive').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    slidesToShow:3,
    slidesToScroll:3,
    speed:600,
    draggable:false,
    touchMove:false
});
 });

// Animated h2 + card
AOS.init({
  // Global settings:
  disable: 'phone',
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false, 
  debounceDelay: 250,
  throttleDelay: 99,
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: false, 
  mirror: false,
  anchorPlacement: 'top-center', 

});


// adaptive

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

// Hamburger-menu
$(function(){

    $('.menu-burger').on('click', function() {
       $('.menu,.active').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $('.menu,.active').addClass("selected");
                $(this).removeAttr('style');
            }
       });

	});
	$('.menu-burger--closed').on('click', function() {
		$('.menu').slideToggle(300, function(){
			 if( $(this).css('display') === "none"){
         $(this).removeAttr('style');
			 }
		});
 
	 });

   
});

$(document).ready(function() {
  $('.menu-burger').click(function(event) {
    $('.menu-burger,.menu').toggleClass('active');
     $('body').toggleClass('lock');
  });
});

// adaptive menu footer

$(document).ready(function () {
  $('.footer-breadcrumbs-list__heading').click(function (event) {
    if($('.footer-breadcrumbs-list__heading').hasClass('one--opened')){
        $('.footer-breadcrumbs-list__heading').not($(this)).removeClass('active');
        $('.footer-breadcrumbs-list--adaptive').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
    
  });
  
})

