var filterOptions = {
    "free_delivery": false,
    "open_time": 0,
    "hasOffers": false,
    "above5Stars": false
}

var showAll = true;


$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();





  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();


  //------- video popup -------//
  $(".hero-banner__video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.featured-carousel').length) {
        $('.featured-carousel').owlCarousel({
            loop: false,
            margin: 30,
            items: 1,
            nav: true,
            dots: false,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            navText : ["<div class='left-arrow'><i class='ti-angle-left'></i></div>","<div class='right-arrow'><i class='ti-angle-right'></i></div>"],
            responsive: {
                768: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            }
        })
    }



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.hero-carousel').length) {
        $('.hero-carousel').owlCarousel({
            loop: false,
            margin: 30,
            items: 1,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500
        })
    }

    $('[data-toggle="popover"]').popover();


    var restArr = [
        {
            "restName": "Ca la Pepi",
            "imgUrl": "./img/restaurant_logo_1.png",
            "free_delivery": true,
            "open_time": 9,
            "hasOffers": true,
            "above5Stars": true,
            "direction": "Carrer Eivissa, 10, 08110 Montcada i Reixac, Barcelona"
        },
        {
            "restName": "Ca la Pepa",
            "imgUrl": "./img/restaurant_logo_2.png",
            "free_delivery": false,
            "open_time": 9,
            "hasOffers": true,
            "above5Stars": false,
            "direction": "Carrer Eivissa, 10, 08110 Montcada i Reixac, Barcelona"
        },{
            "restName": "Ca la Pepu",
            "imgUrl": "./img/restaurant_logo_1.png",
            "free_delivery": false,
            "open_time": 9,
            "hasOffers": false,
            "above5Stars": false,
            "direction": "Carrer Eivissa, 10, 08110 Montcada i Reixac, Barcelona"
        },{
            "restName": "Ca la Pepu",
            "imgUrl": "./img/restaurant_logo_1.png",
            "free_delivery": true,
            "open_time": 9,
            "hasOffers": true,
            "above5Stars": false,
            "direction": "Carrer Eivissa, 10, 08110 Montcada i Reixac, Barcelona"
        },{
            "restName": "Ca la Pepu",
            "imgUrl": "./img/restaurant_logo_1.png",
            "free_delivery": false,
            "open_time": 9,
            "hasOffers": true,
            "above5Stars": true,
            "direction": "Carrer Eivissa, 10, 08110 Montcada i Reixac, Barcelona"
        }
    ];

    function renderRest(){

        $("#restaurant-list").empty();

        restArr.forEach(restInfo => {
            let added = false;
            Object.keys(filterOptions).forEach(propName => {
                if(!added && (filterOptions[propName] && restInfo[propName] || showAll)){
                    $("#restaurant-list").append(
                        '<li><div class="row"><div class="container"><a href="./restaurant/1.html"><img src="'+restInfo.imgUrl+'" class="rest-logo" /><div class="media align-items-center food-card col-lg-8" style="display: inline-block;" ><h4>'+restInfo.restName+'</h4><p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p></div></a><a href="https://www.google.com/maps/search/?api=1&query='+restInfo.direction.replace(/ /g,'+').replace(/,/g,'%2C')+'"><img src="./img/map.png" class="mapIcon" /></a></div></div></li>'
                    );
                    added = true;
                }
            });
        });
    }
    
    renderRest();

    $("#defaultCheck1").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.free_delivery = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.free_delivery = false;
        }
        renderRest();
    });

    $("#defaultCheck2").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.open_time = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.open_time = false;
        }
        renderRest();
    });

    $("#defaultCheck3").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.hasOffers = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.hasOffers = false;
        }
        renderRest();
    });

    $("#defaultCheck4").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.above5Stars = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.above5Stars = false;
        }
        renderRest();
    });

    $("#defaultCheckAll").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheck1" ).prop( "checked", false );
            $( "#defaultCheck2" ).prop( "checked", false );
            $( "#defaultCheck3" ).prop( "checked", false );
            $( "#defaultCheck4" ).prop( "checked", false );
            showAll = true;
        } else {
            // checkbox is not checked -> do something different
        }
        renderRest();
    });
  
});


