// Update body class depending on page
// Add active class to link in tab
// Remove href attribute from link so it does not reload page when clicked
// =============================================================

var body = $("body");

function keepUserIn(userId) {
    $.get("/api/getid/", function (data) {
        userId = data.user;
        console.log("we need the users id help:", data.user);
    })
};


switch (window.location.pathname) {
    case "/dashboard":
        body.addClass("dashboard");
        keepUserIn(userId);
    break;

    case "/add-new":
        body.addClass("add-new");
        $(".link-add-new").addClass("active").removeAttr("href");
        keepUserIn(userId);
    break;

    case "/journal":
        body.addClass("journal");
        $(".link-journal").addClass("active").removeAttr("href");
        keepUserIn(userId);
    break;

    case "/chart":
        body.addClass("journal");
        $(".link-chart").addClass("active").removeAttr("href");
        keepUserIn(userId);
    break;

    case "/calendar":
        body.addClass("calendar");
        $(".link-calendar").addClass("active").removeAttr("href");
        keepUserIn(userId);
    break;

    case "/body":
        body.addClass("body");
        $(".link-body").addClass("active").removeAttr("href");
        keepUserIn(userId);
    break;
}