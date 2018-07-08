$(document).ready(function() {

    // Responsive Heights
    // =============================================================

    // Referencing divs
    var dashboardNav = $(".dashboard-nav");
    var dashboardTabs = $(".dashboard-tabs");
    var dashboardBody = $(".dashboard-body");
    var mainContent = $(".main-content");
    var welcomeMessage = $(".welcome-message");
    var pageTitle = $(".page-title");
    var downArrow = $(".down-arrow");

    var footer = $("#footer");

    // Saving heights in variables
    var windowHeight = $(window).height();
    var dashboardNavHeight = dashboardNav.height();
    var dashboardTabsHeight = dashboardTabs.height();
    var downArrowHeight = downArrow.height();
    var welcomeMessageHeight = welcomeMessage.height();
    var pageTitleHeight = pageTitle.height();
    var footerHeight = footer.height();

    var staticHeights = dashboardNavHeight + dashboardTabsHeight + downArrowHeight;

    var dashboardBodyHeight = windowHeight - dashboardNavHeight - dashboardTabsHeight;

    switch (window.location.pathname) {
        case "/dashboard":

        var bodyIframe = $(".body-iframe");
        bodyIframe.height(windowHeight/2);

        var mainContentHeight = windowHeight - staticHeights - welcomeMessageHeight;

        break;

        case "/add-new":

        var bodyIframe = $(".body-iframe");
        bodyIframe.height(windowHeight/2);

        break;

        default:

        var mainContentHeight = windowHeight - staticHeights - pageTitleHeight;

        break;
    }

    dashboardBody.css("min-height", dashboardBodyHeight);
    mainContent.css("min-height", mainContentHeight);

    console.log("Actual Height: " + dashboardBody.height());
    console.log("Main Content Height: " + mainContent.height());
    console.log("Dashboard Height: " + dashboardBodyHeight);

    // Resizes heights on window resize
    // =============================================================
    $(window).on('resize', function (){
        windowHeight = $(window).height();
        pageTitleHeight = pageTitle.height();

        dashboardBodyHeight = windowHeight - dashboardNavHeight - dashboardTabsHeight;

        switch (window.location.pathname) {
            case "/dashboard":

            var bodyIframe = $(".body-iframe");
            bodyIframe.height(windowHeight/2);

            var mainContentHeight = windowHeight - staticHeights - welcomeMessageHeight;
    
            break;

            case "/add-new":
    
            var bodyIframe = $(".body-iframe");
            bodyIframe.height(windowHeight/2);
    
            break;
    
            default:
    
            var mainContentHeight = windowHeight - staticHeights - pageTitleHeight;
    
            break;
        }

        dashboardBody.css("min-height", dashboardBodyHeight);
        mainContent.css("min-height", mainContentHeight);

    });

});