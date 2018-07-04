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
var dashboardNavHeight = dashboardNav.height();
var dashboardTabsHeight = dashboardTabs.height();
var downArrowHeight = downArrow.height();
var footerHeight = footer.height();

var staticHeights = dashboardNavHeight + dashboardTabsHeight + downArrowHeight;

var dashboardBodyHeight = windowHeight - dashboardNavHeight - dashboardTabsHeight;
var mainContentHeight = windowHeight - staticHeights;

dashboardBody.css("min-height", dashboardBodyHeight);
mainContent.css("min-height", mainContentHeight);

console.log("Actual Height: " + dashboardBody.height());
console.log("Dashbord Height: " + dashboardBodyHeight);

// Hides the down arrow
if ( dashboardBody.height() > dashboardBodyHeight ) {
    downArrow.hide();
}

// Resizes heights on window resize
// =============================================================
$(window).on('resize', function (){
    windowHeight = $(window).height();

    dashboardBodyHeight = windowHeight - dashboardNavHeight - dashboardTabsHeight;
    mainContentHeight = windowHeight - staticHeights;

    dashboardBody.css("min-height", dashboardBodyHeight);
    mainContent.css("min-height", mainContentHeight);

});