$(document).ready(function () {

    var postsContainer = $("#posts-container");
    var painForm = $("#pain-form");
    var body_part = $("#body-part")
    var pain_intensity = $("#pain-intensity");
    var pain_characteristics = $("#pain-char");
    var pain_duration = $("#pain-duration");
    var medications = $("#medications");
    var dosage = $("#dosage");
    var notes = $("#notes");
    var url = window.location.search;
    var userId;
    var postId;
    var updating = false;

    postsContainer.hide();

    // $(document).on("click", "button.createNewPost", createNewPost);
    // $(document).on("click", "button.edit", handlePostEdit);

    var userId = 1;


    function getPosts() {
        console.log("hello");
        var userIdString = userId || "";

        console.log(userIdString);

        if (userIdString) {
            userIdString = "/id/" + userIdString;
        }
        $.get("/api/posts/" + userId, function (data) {
            console.log("posts: ", data);
            posts = data;
            console.log("what is this: ", posts[0].Posts)
            var usersPosts = posts[0].Posts;

            console.log("is this the last post ", usersPosts[usersPosts.length - 1].pain_intensity)

            if (!posts || !posts.length) {
                displayEmptyForm();
            } else {


                var userPostsDiv = $("<div>");
                userPostsDiv.text("Hello, your pain intensity yesterday was " + usersPosts[usersPosts.length - 1].pain_intensity);
                $("#displayPosts").append(userPostsDiv)

            }
        });
    }

    getPosts();

    function getJournalPosts() {
        console.log("hello");
        var userIdString = userId || "";

        console.log(userIdString);

        if (userIdString) {
            userIdString = "/id/" + userIdString;
        }
        $.get("/api/journal/" + userId, function (data) {
            console.log("posts: ", data);
            posts = data;
            console.log("what is this: ", posts[0].Posts)
            var usersPosts = posts[0].Posts;

            console.log("is this the last post ", usersPosts[usersPosts.length - 1].notes)

            if (!posts || !posts.length) {
                displayEmptyForm();
            } else {
                for (var i = 0; i < usersPosts.length; i++) {

                    createNewRow()

                    // var userPostsDiv = $("<div>");
                    // userPostsDiv.text(usersPosts[i].notes);
                    // $("#displayPosts").append(userPostsDiv)
                }
            }
        });
    }

    getJournalPosts();

    function createNewRow() {

        var newPostCard = $("<div>");
        newPostCard.addClass("card");
        var newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-header");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-default");
        var newPostTitle = $("<h2>");
        var newPostDate = $("<small>");
        var newPostCategory = $("<h5>");
        newPostCategory.text(posts.pain_intensity);
        newPostCategory.css({
            float: "right",
            "font-weight": "700",
            "margin-top": "-15px"
        });
        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        newPostTitle.text(posts.body_part + " ");
        newPostBody.text(posts.notes);
        var formattedDate = new Date(post.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        newPostDate.text(formattedDate);
        newPostTitle.append(newPostDate);
        newPostCardHeading.append(deleteBtn);
        newPostCardHeading.append(editBtn);
        newPostCardHeading.append(newPostTitle);
        newPostCardHeading.append(newPostCategory);
        newPostCardBody.append(newPostBody);
        newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.data("post", posts);
        return newPostCard;
    }


    $("#post-submit").on("click", function handleFormSubmit(event) {
        console.log("clicked");
        event.preventDefault();
        var newPost = {
            body_part: body_part.val().trim(),
            pain_intensity: pain_intensity.val().trim(),
            pain_characteristics: pain_characteristics.val().trim(),
            pain_duration: pain_duration.val().trim(),
            medications: medications.val().trim(),
            dosage: dosage.val().trim(),
            notes: notes.val().trim(),
        }
        console.log(newPost);

    });


});