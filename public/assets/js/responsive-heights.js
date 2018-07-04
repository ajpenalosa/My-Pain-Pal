// Responsive Heights
// =============================================================

// Saving height of window in a variable
var windowHeight = $(window).height();

// Referencing divs
var dashboardNav = $(".dashboard-nav");
var dashboardTabs = $(".dashboard-tabs");
var dashboardBody = $(".dashboard-body");
var mainContent = $(".main-content");
var flexCenter = $(".flex-center");
var downArrow = $(".down-arrow");

// Saving heights in variables
var dashboardNavHeight = dashboardNav.height();
var dashboardTabsHeight = dashboardTabs.height();
var dashboardBodyHeight = dashboardBody.height();
var mainContentHeight = mainContent.height();
var flexCenterHeight = flexCenter.height();
var downArrowHeight = downArrow.height();

var staticHeights = dashboardNavHeight + dashboardTabsHeight + flexCenterHeight + downArrowHeight;

if (windowHeight > staticHeights) {
    // Height of main content div is equal to window height minus dashboard height, tabs height and down arrow height
    mainContent.height(windowHeight - dashboardNavHeight - dashboardTabsHeight - downArrowHeight);
    
    // Height of dashboard body div is equal to window height, minus dashboard height and tabs height
    dashboardBody.height(windowHeight - dashboardNavHeight - dashboardTabsHeight);
}

// Resizes heights on window resize
// =============================================================
$(window).on('resize', function (){
    windowHeight = $(window).height();

    if (windowHeight > staticHeights) {
        mainContent.height(windowHeight - dashboardNavHeight - dashboardTabsHeight - downArrowHeight);
        dashboardBody.height(windowHeight - dashboardNavHeight - dashboardTabsHeight);
    }

});