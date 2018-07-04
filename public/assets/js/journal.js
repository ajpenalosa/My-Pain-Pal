$(document).ready(function () {

    var journalContainer = $(".display-journal");
    var body_part = $("#body-part")
    var journal_pain_intensity = $("#post-pain-level-range");
    var pain_characteristics = $("#pain-char");
    var pain_duration = $("#pain-duration");
    var medications = $("#medications");
    var dosage = $("#dosage");
    var notes = $("#notes");
    var userId;



    $.get("/api/getid/", function (data) {
        userId = data.user;
        console.log("we need the users id help:", data.user);
        getJournalPosts(userId);
    })



    function getJournalPosts(userId) {
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



});