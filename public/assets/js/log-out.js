$(document).ready(function(event) {

    var logOut = $("#log-out");

    logOut.on("click", () => {
        $.get('/logout', () => {
            console.log("You have been logged out!");
            location.assign("/");
        });
    });
});