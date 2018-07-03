$(document).ready(function () {

    var postsContainer = $("#posts-container");
    var journalContainer = $(".display-journal");
    var body_part = $("#body-part")
    var pain_intensity = $("#new-pain-level-range");
    var existing_pain_intensity = $("#pain-level-range");
    var pain_characteristics = $("#pain-char");
    var pain_duration = $("#pain-duration");
    var medications = $("#medications");
    var dosage = $("#dosage");
    var notes = $("#notes");
    var url = window.location.search;
    var userId;
    var updating = false;
    var bodyPartDiv = $(".body-part");
    var quickPostDiv = $("#existing-user-form");
    var smileyContainer = $(".existing-smiley");
    postsContainer.hide();


    function displayEmptyForm() {
        console.log("empty form")
        postsContainer.show();
    }

    var userId = 1;


    function getPosts() {
        console.log("hello");
        var userIdString = userId || "";
        console.log(userIdString);
        if (userIdString) {
            userIdString = "/id/" + userIdString;
        }
        $.get("/api/dashboard/" + userId, function (data) {
            console.log("posts: ", data);
            posts = data;
            console.log("what is this: ", posts[0].Posts)
            var usersPosts = posts[0].Posts;
            console.log("this one is the users posts console: ", usersPosts);
            if (usersPosts.length === 0) {
                console.log("conditional works");
                displayEmptyForm();
                quickPostDiv.hide();
                smileyContainer.hide();
            } else {
                postsContainer.hide();
                console.log("else");
                var userPostsDiv = $("<div>");
                userPostsDiv.text("Hello, your pain intensity yesterday was " + usersPosts[usersPosts.length - 1].pain_intensity);
                $(".yesterdays-pain").append(userPostsDiv);
                bodyPartDiv.append(usersPosts[usersPosts.length - 1].body_part);
                quickPostDiv.show();
                smileyContainer.show();
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
            for (var i = 0; i < posts.Posts.length; i++) {
                console.log(JSON.stringify(posts.Posts[i]));
                var postJournal = $("<div>");
                postJournal.append("Body Part: " + posts.Posts[i].body_part);
                postJournal.append("Pain Intensity: " + posts.Posts[i].pain_intensity);
                postJournal.append("Pain Characterstics: " + posts.Posts[i].pain_characteristics);
                postJournal.append("Pain Duration: " + posts.Posts[i].pain_duration);
                postJournal.append("Medications: " + posts.Posts[i].medications);
                postJournal.append("Dosage: " + posts.Posts[i].dosage);
                postJournal.append("Notes: " + posts.Posts[i].notes);
                journalContainer.append(postJournal);
            }
        });
    }

    getJournalPosts();


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
        submitPost(newPost);
    });

    $("#quick-submit").on("click", function handleFormSubmit(event) {
        console.log("clicked");
        event.preventDefault();
        var newPost = {
            pain_intensity: existing_pain_intensity.val().trim(),
        }
        console.log(newPost);
        submitPost(newPost);
    });


    function submitPost(Post) {
        $.post("/api/dashboard/", Post, function () {
            window.location.href = "/dashboard";
        });
    }
});