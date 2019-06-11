'use strict';


function mediaQuerie(direction, n) {
	return window.matchMedia(`(${direction}-width: ${n}px)`).matches;
}

function toggleSlider(selector, media, options) {
  var elem = $(selector);

  getSlider();
  $(window).resize(getSlider);

  function getSlider(){
       if (mediaQuerie('max', media)) {
          elem.not('.slick-initialized').find(selector +'__col').removeAttr('style');
          elem.not('.slick-initialized').slick(options);
       } else {
          elem.closest('.slick-initialized').slick('unslick') 
       }
  }
}

$('.pres-grid').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	fade: true
});



toggleSlider('.services-grid', 1135, {
	responsive: [
			{
				breakpoint: 1135,
				settings: {
          			slidesToShow: 2,
          			slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 965,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
});



$('.grid-wrap').each((i, el) => {
    var wrap = $(el),
        toggler = false,
        showElem = +wrap.attr('data-show');
	
	wrap.find(`.blog-grid__col:nth-child(n + ${showElem + 1})`).hide();
	
    wrap.find('.show-more').click( () => {
        if (toggler) {
            wrap.find(`.blog-grid__col:nth-child(n + ${showElem + 1})`).slideUp(300);
        } else {
            wrap.find(`.blog-grid__col:nth-child(n + ${showElem + 1})`).slideDown(300);
        }

        toggler = !toggler
    });
});

toggleSlider('.mot-grid', 1200, {
	responsive: [
			{
				breakpoint: 1200,
				settings: {
         			slidesToShow: 2,
          			slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
});

toggleSlider('.blog-grid', 1270, {
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	responsive: [
		{
			breakpoint: 1110,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}
	]
});