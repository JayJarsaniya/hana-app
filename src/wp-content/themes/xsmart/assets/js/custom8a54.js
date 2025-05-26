// JavaScript Document
jQuery(document).ready(function($) {
		
	"use strict";

	$('#newsletter-1 .es_subscription_form').addClass('newsletter-form');
	$('#newsletter-1 .es-field-wrap').addClass('input-group');
	$('#newsletter-1 .es-field-wrap .es_txt_email').addClass('form-control');
	$('#newsletter-1 .es_subscription_form .es_subscription_form_submit').addClass('btn btn-skyblue tra-white-hover');

	$(window).on('load', function() {
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		var preloader = $('#loader-wrapper'),
			loader = preloader.find('.cssload-contain');
			loader.fadeOut();
			preloader.delay(400).fadeOut('slow');
				
		$(window).stellar({});
		
	});


	$(window).on('scroll', function() {								
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/			
		var b = $(window).scrollTop();
		
		if( b > 72 ){		
			$(".navbar.fixed-top").addClass("scroll");
		} else {
			$(".navbar.fixed-top").removeClass("scroll");
		}	

		
	});


	/*----------------------------------------------------*/
	/*	Animated Scroll To Anchor
	/*----------------------------------------------------*/	
	$('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
		
		e.preventDefault();

		var target = this.hash,
			$target = jQuery(target);


		if( $target.length > 0 ){	
			if( $('.navbar-collapse').hasClass('show') ){
				$('.navbar-toggler').trigger( 'click' );
			}							
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {					
				window.location.hash = target;

			});
		}
		
	});

	
	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/	
	$.scrollUp = function (options) {

		// Defaults
		var defaults = {
			scrollName: 'scrollUp', // Element ID
			topDistance: 600, // Distance from top before showing element (px)
			topSpeed: 800, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '', // Text for element
			scrollImg: false, // Set true to use image
			activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		};

		var o = $.extend({}, defaults, options),
			scrollId = '#' + o.scrollName;

		// Create element
		$('<a/>', {
			id: o.scrollName,
			href: '#top',
			title: o.scrollText
		}).appendTo('body');
		
		// If not using an image display text
		if (!o.scrollImg) {
			$(scrollId).html('<i class="fas fa-arrow-up"></i>');
		}

		// Minium CSS to make the magic happen
		$(scrollId).css({'display':'none','position': 'fixed','z-index': '99999'});

		// Active point overlay
		if (o.activeOverlay) {
			$("body").append("<div id='"+ o.scrollName +"-active'></div>");
			$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '99999' });
		}

		// Scroll function
		$(window).on('scroll', function(){	
			switch (o.animation) {
				case "fade":
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
					break;
				case "slide":
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
					break;
				default:
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
			}
		});

		// To the top
		$(scrollId).on('click', function(event){
			$('html, body').animate({scrollTop:0}, o.topSpeed);
			event.preventDefault();
		});

	};
	
	$.scrollUp();

	/*----------------------------------------------------*/
	/*	Sticky Bottom Quick
	/*----------------------------------------------------*/

	$('.nb-form').on('hover', function(){
        $(this).toggleClass("open");
    });

	/*----------------------------------------------------*/
	/*	Features Carousel
	/*----------------------------------------------------*/
	var owl = $('.features-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			dots: true,
			rtl: rtl,
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			smartSpeed: 1500,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				},
				768:{
					items:2
				},
				991:{
					items:3
				},
				1000:{
					items:4
				}
			}
	});
	


	/*----------------------------------------------------*/
	/*	Single Image Lightbox
	/*----------------------------------------------------*/
			
	$('.image-link').magnificPopup({
	  type: 'image'
	});	


	/*----------------------------------------------------*/
	/*	Video Link #1 Lightbox
	/*----------------------------------------------------*/
	
	$('.video-popup1').each(function(){		
		var videoUrl = $(this).attr( 'href' );
		$(this).magnificPopup({
		    type: 'iframe',			  	  
			iframe: {
					patterns: {
						youtube: {				   
							index: 'youtube.com',
							src: videoUrl					
								}
							}
						}		  		  
		});
	});


	/*----------------------------------------------------*/
	/*	Video Link #2 Lightbox
	/*----------------------------------------------------*/
	
	$('.video-popup2').each(function(){		
		var videoUrl = $(this).attr( 'href' );
		$(this).magnificPopup({
		    type: 'iframe',			  	  
			iframe: {
					patterns: {
						youtube: {				   
							index: 'youtube.com',
							src: videoUrl					
								}
							}
						}		  		  
		});
	});


	/*----------------------------------------------------*/
	/*	Video Link #3 Lightbox
	/*----------------------------------------------------*/
	
	$('.video-popup3').each(function(){		
		var videoUrl = $(this).attr( 'href' );
		$(this).magnificPopup({
		    type: 'iframe',			  	  
			iframe: {
					patterns: {
						youtube: {				   
							index: 'youtube.com',
							src: videoUrl					
								}
							}
						}		  		  
		});
	});


	/*----------------------------------------------------*/
	/*	Screens Carousel Slick
	/*----------------------------------------------------*/
	if ($('body').hasClass('rtl')) {
		var rtl = true;
	}else{
		var rtl = false;
	}
	$('.screens-carousel').slick({
		infinite: true,
		autoplay: true,
		centerMode: true,
		dots: true,
		autoplaySpeed: 3500,
		speed: 1000,
		rtl: rtl,
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
			    dots: false,
		        slidesToShow: 1,
		        variableWidth: false,
		        fade: true,
				cssEase: 'linear'
		      }
		    }
		]
	});	

	/*----------------------------------------------------*/
	/*	Email Subscribers form
	/*----------------------------------------------------*/

	$('.es-name input[type="text"]').addClass('form-control');
	$('.es-email input[type="email"]').addClass('form-control');
	$('.es-email').addClass('d-grid d-md-flex');
	$('.es-submit input[type="submit"]').addClass('btn btn-primary');
	$('.gjs-row').addClass('gjs-row-custom').removeClass('gjs-row');

	$('div.gjs-cell').each(function() {
		var $cell = $(this);
		if($.trim($cell.html())==='') {
		   $cell.parent().remove();
		}
   });

	$('.footer-widget .es-email .btn').attr('type', 'hidden');
	$('<button type="submit" name="submit"><i class="far fa-arrow-alt-circle-right"></i></button>').insertAfter('.footer-widget .es-email .btn');

	$('.footer .footer-form .es-email .btn').attr('type', 'hidden');
	$('<button type="submit" name="submit"><i class="far fa-arrow-alt-circle-right"></i></button>').insertAfter('.footer .footer-form .es-email .btn');


	/*----------------------------------------------------*/
	/*	Statistic Counter
	/*----------------------------------------------------*/

	$('.count-element').each(function () {
		$(this).appear(function() {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		},{accX: 0, accY: 0});
	});


	/*----------------------------------------------------*/
	/*	Reviews Grid
	/*----------------------------------------------------*/

	$('.grid-loaded').imagesLoaded(function () {
        var $grid = $('.masonry-wrap').isotope({
            itemSelector: '.grid-loaded > div',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
              columnWidth: '.grid-loaded > div',
            }
        });	        
    });


	/*----------------------------------------------------*/
	/*	Brands Logo Rotator
	/*----------------------------------------------------*/

	var owl = $('.brands-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 6,
			loop:true,
			autoplay:true,
			navBy: 1,
			dots: false,
			rtl: rtl,
			autoplayTimeout: 4000,
			autoplayHoverPause: false,
			smartSpeed: 2000,
			responsive:{
				0:{
					items:2
				},
				550:{
					items:3
				},
				767:{
					items:3
				},
				768:{
					items:4
				},
				991:{
					items:4
				},				
				1000:{
					items:5
				}
			}
	});


	/*----------------------------------------------------*/
	/*	Apps Rotator
	/*----------------------------------------------------*/

	var owl = $('.apps-holder');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			dots: true,
			rtl: rtl,
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			smartSpeed: 1500,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				767:{
					items:2
				},
				768:{
					items:2
				},
				991:{
					items:4
				},
				1000:{
					items:4
				}
			}
	});


	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.reviews-holder');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			dots: true,
			rtl: rtl,
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			smartSpeed: 1500,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				768:{
					items:2
				},
				991:{
					items:3
				},
				1000:{
					items:3
				}
			}
	});

	var owl = $('.post-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}	
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			dots: true,
			rtl: rtl,
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			smartSpeed: 1500,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				768:{
					items:2
				},
				991:{
					items:3
				},
				1000:{
					items:3
				}
			}
	});



	/*----------------------------------------------------*/
	/*	Sticky Bottom Quick
	/*----------------------------------------------------*/

	$('.help-btn').on('click', function(){
        $(".sticky-form").toggleClass("open");
        $(this).toggleClass("clicked");
    });

    /*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.icons-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}	
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			dots: false,
			rtl: rtl,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
			smartSpeed: 900,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				768:{
					items:1
				},
				991:{
					items:1
				},
				1000:{
					items:1
				}
			}
	});

	// Additional scripts
	$('table').addClass('table');
	$('blockquote').addClass('blockquote');
	$('.sidebar-div select, .footer-widget select, .orderby').selectize({
		create: false,
	});	

	// Woocommerce scripts
	/* count control */
    $(document).on('click', '.count-control', function(){
    	var $quantity_input = $(this).closest('.quantity').find('.qty');
        var old = parseInt($quantity_input.val());
        var step = parseInt($quantity_input.attr('step'));
        if($(this).hasClass('plus')){
          $quantity_input.val(old+step);          

        }else{
          if(old > 1){
            $quantity_input.val(old-step);
          }     
        }

        $(this).closest('form').find('button[type="submit"]').prop('disabled', false);
        return false;
    });

    /*product-gallery-carousel*/
    $('.product-gallery-carousel').owlCarousel({
         margin: 15,
         nav: false,
         dots: true,
         items: 3
    });	

    $('.woocommerce-product-gallery__image a').magnificPopup({
	  type: 'image'
	});		

    function xsmart_megamenu(){  
    	var width, pos, left;
	    $('.xsmart-megamenu-nav-item').each(function(){	
	      
	      if ( $(this).hasClass('megamenu-containerwidth') ) {
	        var container = $(this).closest('.container');	
	      }
	      if ( $(this).hasClass('megamenu-navbarwidth') ) {
	       	var container = $(this).closest('.navbar-nav');	        
	      }

	      width = container.innerWidth();
	      pos = $(this).offset();
	      left = pos.left - (container.offset()).left;
	      $(this).closest('.dropdown-menu').css({left : - left, minWidth: width, maxWidth: width });
	    })

	  } 

	  
	  

	  $(window).on( 'resize', function(){
	    if ( $(window).width() > 991 ) {
	      xsmart_megamenu();
	    }else{
	      $('.xsmart-megamenu-nav-item').closest('.dropdown-menu').css({});
	    }
	  })

	
	  xsmart_megamenu();
	var preloader = $('#loader-wrapper'),
	loader = preloader.find('.loading-center');
	loader.fadeOut();
	preloader.delay(1500).fadeOut('slow');
	  

});


