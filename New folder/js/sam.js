$("#owl1").owlCarousel({
	items: 1,
    loop: true,
    rtl: true,
	autoplay: true,
	autoplayTimeout: 4000,
	margin: 10,
	nav: false,
	dots: true,
})


$("#owl2").owlCarousel({
	loop:true,
	rtl: true,
    margin:10,
	nav:true,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
	}
	
})


$("#owl3").owlCarousel({
	items: 1,
    loop: true,
    rtl: true,
	autoplay: true,
	autoplayTimeout: 4000,
	margin: 10,
	nav: false,
	dots: true,
})


$("#owl4").owlCarousel({
	loop:true,
	rtl: true,
    margin:10,
	nav:true,
	dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
	}
	
})


$(function () {
    "use strict";
    $("nav ul li").on("click", function () {
        
        // Get The ID Of a When I Clicked
        var myID = $(this).attr("id");
        
        // Remove Class Inactive When I clicked And Add It In Siblings In Ul
        $(this).addClass("inactive").siblings().removeClass("inactive");
        
        // Hide The Div When i Clicked
        $(".third .anounce .tabs div").hide();
        
        // When Clicked In Li Get Div Same ID
        
        $("#" + myID + "-content").fadeIn(1000);
    });
});