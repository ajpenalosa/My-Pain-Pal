// Loading jQuery when document is ready
// =============================================================
$(document).ready(function() {
    
    // Carousel
    // =============================================================

    // Settings
    $(".carousel").carousel({
        interval: 12000,
        pause: "false"
    });

    // Making height of carousel item the height of the browser window
    var $item = $(".carousel-item");
    var $wHeight = $(window).height();
    $item.height($wHeight);

    // Resizing carousel item height on window resize
    $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
    });
    
  });