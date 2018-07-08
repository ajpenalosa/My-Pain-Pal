$(document).ready(function () {

    var female_div = $("#female");
    var male_div = $("#male");

    function keepUserIn(userId) {
        $.get("/api/getid/", function (data) {
            userId = data.user;
            console.log("we need the users id help:", data.user);
            getPosts(userId);
        });
    }

    keepUserIn();



    function getPosts(userId) {
        console.log("hello");
        var userIdString = userId || "";
        console.log(userIdString);
        if (userIdString) {
            userIdString = "/id/" + userIdString;
        }
        $.get("/api/dashboard/" + userId, function (data) {
            console.log("these posts are: ", data);
            posts = data;
            console.log("what is this: ", posts[0].Posts)
            var usersPosts = posts[0].Posts;
            console.log("this one is the users posts console: ", usersPosts);

            // Triggers the modal
            $('#body-modal').modal();

            if (posts[0].gender === "Female") {
                female_div.show();
            } else {
                male_div.show();
            }

        });
    }





});