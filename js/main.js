//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//
$(window).load(function() {
	// quick search regex
	var qsRegex;
	// init Isotope
	var $grid = $('.app-section-content').isotope({
	  itemSelector: '.app-item',
	  stagger: 30,
	  transitionDuration: '0.8s',
	  layoutMode: 'fitRows',
	  filter: function() {
		return qsRegex ? $(this).text().match( qsRegex ) : true;
	  }
	});
	// use value of search field to filter
	var $quicksearch = $('.quicksearch').keyup( debounce( function() {
		$('.no-result-found-wrapper').hide();	
		qsRegex = new RegExp( $quicksearch.val(), 'gi' );
		$grid.isotope();
		if( !$grid.data('isotope').filteredItems.length ) {
			$('.no-result-found-wrapper').fadeIn();
		}
	}, 200 ) );
	// debounce so filtering doesn't happen every millisecond
	function debounce( fn, threshold ) {
	  var timeout;
	  threshold = threshold || 100;
	  return function debounced() {
		clearTimeout( timeout );
		var args = arguments;
		var _this = this;
		function delayed() {
		  fn.apply( _this, args );
		}
		timeout = setTimeout( delayed, threshold );
	  };
	}
});
$(document).ready(function() {
	particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#33cdff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":7,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#33cdff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
});
//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//