$(document).ready(function(event) {

    var logOut = $("#log-out");

    logOut.on("click", function () {
        $.get('/logout', function() {
            console.log("You have been logged out!");
            location.assign('/');
        })
    });
});