// Loading jQuery when document is ready
// =============================================================
$(document).ready(function() {
    
    switch (window.location.pathname) {
        case "/":
            $("body").addClass("home");
        break;
    }

    // Displaying current year in the footer
    var currentYear = (new Date).getFullYear();
    $(".current-year").text(currentYear);

    // Show/Hide Footer
    // =============================================================

    var footerToggle = $(".footer-toggle");

    footerToggle.on("click", function() {

        var toggleState = $(this).attr("data-toggle");
        var arrowLeft = $(".arrow-left");
        var arrowRight = $(".arrow-right");

        if ( toggleState === "show" ) {
            // Scrolls to the bottom of the document
            $(window).scrollTop($(document).height());
            $(this).attr("data-toggle", "hide");
            $(this).css({
                width: "36px"
            });
            arrowLeft.css({
                marginLeft: "-18px"
            });
            arrowRight.css({
                marginLeft: "-18px"
            });
        }
        else {
            // Scrolls to the top
            $(window).scrollTop(0);
            $(this).attr("data-toggle", "show");
            $(this).css({
                width: "60px"
            });
            arrowLeft.css({
                marginLeft: "-29px"
            });
            arrowRight.css({
                marginLeft: "-7px"
            });
        }
    })
    
    // Carousel
    // =============================================================

    // Settings
    $(".carousel").carousel({
        interval: 12000,
        pause: "false"
    });

    // Restarts video when slide becomes active
    $("#home-carousel").on("slide.bs.carousel", function() {

        var video = $(this).find(".active").find("video").attr("id");

        if ( video === "video-man") {
            var videoWoman = document.getElementById("video-woman");
            videoWoman.pause();
            videoWoman.currentTime = 0;
            videoWoman.play();
        }
        else {
            var videoMan = document.getElementById("video-man");
            videoMan.pause();
            videoMan.currentTime = 0;
            videoMan.play();
        }
    })

    // Making height of carousel item the height of the browser window
    var carouselItem = $(".carousel-item");
    var windowHeight = $(window).height();
    carouselItem.height(windowHeight);

    // Referencing divs
    var homeNav = $(".home-nav");
    var carouselContent = $(".carousel-content");
    var downArrow = $(".down-arrow");

    // Saving heights in variables
    var homeNavHeight = homeNav.height();
    var carouselContentHeight = carouselContent.height();
    var downArrowHeight = downArrow.height();
    
    // Resizes heights on window resize
    // =============================================================
    $(window).on('resize', function (){
        windowHeight = $(window).height();
        carouselItem.height(windowHeight);
    });
    
  });