// Responsive Heights
// =============================================================

// Referencing divs
var dashboardNav = $(".dashboard-nav");
var dashboardTabs = $(".dashboard-tabs");
var dashboardBody = $(".dashboard-body");
var mainContent = $(".main-content");
var downArrow = $(".down-arrow");
var footer = $("#footer");

// Saving heights in variables
var windowHeight = $(window).height();
var documentHeight = $(document).height();
var dashboardNavHeight = dashboardNav.height();
var dashboardTabsHeight = dashboardTabs.height();
var downArrowHeight = downArrow.height();
var footerHeight = footer.height();

var staticHeights = dashboardNavHeight + dashboardTabsHeight + downArrowHeight;

var dashboardBodyHeight = (windowHeight - dashboardNavHeight - dashboardTabsHeight) + "px";
var mainContentHeight = (windowHeight - staticHeights) + "px";

dashboardBody.css("min-height", dashboardBodyHeight);
mainContent.css("min-height", mainContentHeight);

// Hides the down arrow if document height is greater than the window height
// if ( $(document).height() - footerHeight - 20 > windowHeight ) {
//     downArrow.hide();
// }

// Resizes heights on window resize
// =============================================================
$(window).on('resize', function (){
    windowHeight = $(window).height();

    dashboardBodyHeight = (windowHeight - dashboardNavHeight - dashboardTabsHeight) + "px";
    mainContentHeight = (windowHeight - staticHeights) + "px";

    dashboardBody.css("min-height", dashboardBodyHeight);
    mainContent.css("min-height", mainContentHeight);

});