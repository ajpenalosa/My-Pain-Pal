// Update body class depending on page
// Add active class to link in tab
// Remove href attribute from link so it does not reload page when clicked
// =============================================================

var body = $("body");

switch (window.location.pathname) {
    case "/dashboard":
        body.addClass("dashboard");
    break;

    case "/add-new":
        body.addClass("add-new");
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