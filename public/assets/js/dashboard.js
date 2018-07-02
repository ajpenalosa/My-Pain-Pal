// Update body class depending on page
// Add active class to link in tab
// Remove href attribute from link so it does not reload page when clicked
// =============================================================

var body = $("body");

switch (window.location.pathname) {
    case "/dashboard":
        body.addClass("dashboard");
        $(".link-add-new").addClass("active").removeAttr("href");
    break;

    case "/add-new":
        body.addClass("dashboard");
        $(".link-add-new").addClass("active").removeAttr("href");
    break;

    case "/journal":
        body.addClass("journal");
        $(".link-journal").addClass("active").removeAttr("href");
    break;

    case "/chart":
        body.addClass("journal");
        $(".link-chart").addClass("active").removeAttr("href");
    break;

    case "/calendar":
        body.addClass("calendar");
        $(".link-calendar").addClass("active").removeAttr("href");
    break;

    case "/body":
        body.addClass("body");
        $(".link-body").addClass("active").removeAttr("href");
    break;
}

// Dashboard
// =============================================================

// Saving height of window in a variable
var $wHeight = $(window).height();

// Saves height of dashboard nav in a variable
var dashboardHeight = $(".dashboard-nav").height();
// Saves height of tabs in a variable
var tabsHeight = $(".dashboard-tabs").height();
var downArrowHeight = $(".down-arrow").height();

// Referencing the dashboard body div
var dashboardBody = $(".dashboard-body");
// Referencing main-content div
var mainContent = $(".main-content");

// Height of main content div is equal to window height minus dashboard height, tabs height and down arrow height
mainContent.height($wHeight - dashboardHeight - tabsHeight - downArrowHeight);

// Height of dashboard body div is equal to window height, minus dashboard height and tabs height
dashboardBody.height($wHeight - dashboardHeight - tabsHeight);

// Resizes heights on window resize
// =============================================================
$(window).on('resize', function (){
    $wHeight = $(window).height();
    mainContent.height($wHeight - dashboardHeight - tabsHeight - downArrowHeight);
    dashboardBody.height($wHeight - dashboardHeight - tabsHeight);
});