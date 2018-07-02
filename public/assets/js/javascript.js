// Loading jQuery when document is ready
// =============================================================
$(document).ready(function() {

    // Displaying current year in the footer
    var currentYear = (new Date).getFullYear();
    $(".current-year").text(currentYear);

    // On click event to show/hide footer
    var footerToggle = $(".footer-toggle");

    footerToggle.on("click", function() {

        var toggleState = $(this).attr("data-toggle");
        var arrowLeft = $(".arrow-left");
        var arrowRight = $(".arrow-right");

        if ( toggleState === "show" ) {
            $(this).attr("data-toggle", "hide");
            $(this).attr("href", "#footer");
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
            $(this).attr("data-toggle", "show");
            $(this).attr("href", "#top");
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
        console.log($(this).find(".active").find("video").attr("id"));

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
    var $item = $(".carousel-item");
    var $wHeight = $(window).height();
    $item.height($wHeight);

    
    // Resizes heights on window resize
    // =============================================================
    $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
    });
    
  });