$(window).load(function(){"use strict";$("#loader-wrapper").delay(300).fadeOut("slow");$("#loader-wrapper #loader, #loader-wrapper p").fadeOut();$(".navbar .nav a").smoothScroll({speed:1200});$(window).scroll(function(){if($(window).scrollTop()>$(".navbar").height()+30){$("nav").addClass("show-nav")}else{$("nav").removeClass("show-nav");$("nav .navscroll").collapse({toggle:false});$("nav .navscroll").collapse("hide");$("nav .navbar-toggle").addClass("collapsed")}});var e=new WOW({offset:100,mobile:false});e.init();$(".tlt").textillate({selector:".texts",loop:true,minDisplayTime:4e3,initialDelay:0,autoStart:true,inEffects:[],outEffects:["hinge"],"in":{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:false,shuffle:true,reverse:false,callback:function(){}},out:{effect:"fadeOutUp",delayScale:1.5,delay:50,sync:false,shuffle:true,reverse:false,callback:function(){}},callback:function(){}});$(".tip").tooltip();$(".lightbox").nivoLightbox();$(".img-slides img").click(function(){if($(this).attr("id")!="slideFront"){var e=$("#slideFront").attr("src");var t=$(this).attr("src");$(this).attr("src",e);$("#slideFront").attr("src",t)}});$("#owl-carousel").owlCarousel({items:6,itemsDesktop:[1199,5],itemsDesktopSmall:[980,4],itemsTablet:[768,3],itemsTabletSmall:[590,2],itemsMobile:[479,1],autoPlay:true,stopOnHover:true,pagination:false});$("#testimonial-carousel").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsTabletSmall:[590,1],itemsMobile:[479,1],autoPlay:true,stopOnHover:true,pagination:false,transitionStyle:"fadeUp"});$(function(){$(".stat").appear(function(){$(".stat").each(function(){var e=$(this).attr("data-perc");$(this).find(".factor").delay(6e3).countTo({from:0,to:e,speed:3e3,refreshInterval:50})})})});$(".panel-heading").click(function(){if($(this).find("i").hasClass("pe-7s-less")){$(this).find("i").removeClass("pe-7s-less").addClass("pe-7s-plus")}else if($(this).find("i").hasClass("pe-7s-plus")){$(".panel-heading").find("i").removeClass("pe-7s-less").addClass("pe-7s-plus");$(this).find("i").removeClass("pe-7s-plus").addClass("pe-7s-less")}})})