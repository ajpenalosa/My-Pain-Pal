$(document).ready(function () {

    var postsContainer = $("#posts-container");
    var painForm = $("#pain-form");
    var bodyPart = $("#body-part")
    var painIntensity = $("#pain-intensity");
    var painCharactistics = $("#pain-char");
    var painDuration = $("#pain-duration");
    var medications = $("#medications");
    var dosage = $("#dosage");
    var notes = $("#notes");

    // $(document).on("click", "button.createNewPost", createNewPost);
    // $(document).on("click", "button.edit", handlePostEdit);

    var userId = 1;
    var url = window.location.search;
    // var userId;

    function getPosts() {
        var userIdString = userId || "";

        if (userIdString) {
            userIdString = "/id/" + userIdString;
        }
        $.get("/api/posts/" + userId, function (data) {
            console.log("posts", data);
            posts = data;
            if (!posts || !posts.length) {
                displayEmptyForm();
            } else {
                initializeRows();
            }
        });
    }

    getPosts();

    function initializeRows() {
        postsContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(createNewRow(posts[i]));
        }
        postsContainer.append(postsToAdd);
    }

    function displayEmptyForm() {
        postsContainer.show();
    }


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
        newPostCategory.text(post.category);
        newPostCategory.css({
            float: "right",
            "font-weight": "700",
            "margin-top": "-15px"
        });
        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        newPostTitle.text(post.title + " ");
        newPostBody.text(post.body);
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
        newPostCard.data("post", post);
        return newPostCard;
    }


    $("#post-submit").on("click", function handleFormSubmit(event) {
        console.log("clicked");
        event.preventDefault();
        var newPost = {
            bodyPart: bodyPart.val().trim(),
            painIntensity: painIntensity.val().trim(),
            painCharactistics: painCharactistics.val().trim(),
            painDuration: painDuration.val().trim(),
            medications: medications.val().trim(),
            dosage: dosage.val().trim(),
            notes: notes.val().trim(),
        }

        console.log(newPost);

        // if (updating) {
        //     newPost.id = postId;
        //     updatePost(newPost);
        // } else {
            submitPost(newPost);
        // }


    });

    function submitPost(Post) {
        $.post("/api/posts/", Post, function () {
            window.location.href = "/posts";
        });
    }
    


});