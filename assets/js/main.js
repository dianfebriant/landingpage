
$(window).on("load", function(){
    // preloader
    $(".preloader").fadeOut("slow");
});


$(document).ready(function(){
// navbar shrink
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });


// video popup
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
                $("#player-1").attr("src",videoSrc);
            }
        }
    });

// owl carousel
$('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});


// app screenshots
$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});


// testimonial
$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

// page scroll- scollIt

    $.scrollIt({
        topOffset: -50
    });

// NAVBAR COLLAPSE  
    $(".navbar-link").on("click", function(){
        $(".navbar-collapse").collapse("hide")
    });

    // toggle theme 

    function toggleTheme(){
        if(localStorage.getItem("dian-websi") !== null){
            if(localStorage.getItem("dian-websi") ==="dark"){
                $("body").addClass("dark");
            }else {
                $("body").removeClass("light");
            }
        }
        updateIcon();
    }

    toggleTheme();
    $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("dian-websi", "dark");

        }else {
            localStorage.setItem("dian-websi", "light");
        }
        updateIcon();
    });
    toggleTheme();
    function updateIcon() {
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else {
            $(".toggle-theme i").addClass("fa-moon");
            $(".toggle-theme i").removeClass("fa-sun");
        }
    }


    $(function() {
        $(".home-text").typed({
          strings: ["Typed.js is a jQuery plugin that types.", "Enter in any string,", "and watch it type at the speed you've set,", "backspace what it's typed,", "and begin a new sentence for however many strings you've set."],
          typeSpeed: 0
        });
      });
});

