// Update body class depending on page
// Add active class to link in tab
// Remove href attribute from link so it does not reload page when clicked
// =============================================================

$(document).ready(function () {

    var body = $("body");

    function keepUserIn(userId) {
        $.get("/api/getid/", function (data) {
            userId = data.user;
            console.log("we need the users id help:", data.user);
            console.log("all data:", data);
            getUsers(userId);
        })
    };

    function getUsers(userId) {
        $.get("/api/users/" + userId, function(data) {
            console.log("This should be the person");
            console.log(data.first_name);
            $(".user-name").text("Hello, " + data.first_name);
        });
    }

    switch (window.location.pathname) {
        case "/dashboard":
            body.addClass("dashboard");
            keepUserIn();
        break;
    
        case "/add-new":
            body.addClass("add-new");
            $(".link-add-new").addClass("active").removeAttr("href");
            keepUserIn();
        break;
    
        case "/journal":
            body.addClass("journal");
            $(".link-journal").addClass("active").removeAttr("href");
            keepUserIn();
        break;
    
        case "/chart":
            body.addClass("chart");
            $(".link-chart").addClass("active").removeAttr("href");
            keepUserIn();
        break;
    
        case "/calendar":
            body.addClass("calendar");
            $(".link-calendar").addClass("active").removeAttr("href");
            keepUserIn();
        break;
    
        case "/body":
            body.addClass("body");
            $(".link-body").addClass("active").removeAttr("href");
            keepUserIn();
        break;
    }
});