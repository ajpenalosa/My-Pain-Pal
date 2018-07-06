$(document).ready(function(event) {

    var logOut = $("#log-out");

    logOut.on("click", () => {
        $.get('/', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/body', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/calendar', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/chart', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/dashboard', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/index', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/journal', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/post', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });

        $.get('/add-new', () => {
            console.log("You have been logged out!");
            location.assign('/');
        });
    });
    
});