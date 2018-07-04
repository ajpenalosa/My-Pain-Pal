$(document).ready(function () {

    var postsContainer = $("#posts-container");
    var journalContainer = $(".display-journal");
    var body_part = $("#body-part")
    var pain_intensity = $("#new-pain-level-range");
    var existing_pain_intensity = $("#pain-level-range");
    var journal_pain_intensity = $("#post-pain-level-range");
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
                var postJournal = $("<div class='post-item text-center'>");

                var laugh = "<i class='far fa-laugh'></i>";
                var smile = "<i class='far fa-smile'></i>";
                var meh = "<i class='far fa-meh'></i>";
                var frown = "<i class='far fa-frown'></i>";
                var cry = "<i class='far fa-sad-cry'></i>";

                var painIcon;

                var painIntensity = posts.Posts[i].pain_intensity;
                var painCharacteristic = "";
                var painDuration = "";
                var painMedications = "";
                var painDosage = "";
                var painNotes = "";

                // Chooses which icon to display based on pain intensity level

                if ( 0 <= painIntensity && painIntensity <= 2 ) {
                    painIcon = laugh;
                }
                else if ( 3 <= painIntensity && painIntensity <= 4 ) {
                    painIcon = smile;
                }
                else if ( 5 <= painIntensity && painIntensity <= 6 ) {
                    painIcon = meh;
                }
                else if ( 7 <= painIntensity && painIntensity <= 8 ) {
                    painIcon = frown;
                }
                else if ( 9 <= painIntensity && painIntensity <= 10 ) {
                    painIcon = cry;
                }

                // Conditionals that replace nulls and empty values

                if ( posts.Posts[i].pain_characteristics === null || !posts.Posts[i].pain_characteristics ) {
                    painCharacteristic = "None";
                }
                else {
                    painCharacteristic = posts.Posts[i].pain_characteristics;
                }

                if ( posts.Posts[i].pain_duration === null || !posts.Posts[i].pain_duration ) {
                    painDuration = "None";
                }
                else {
                    painDuration = posts.Posts[i].pain_duration;
                }

                if ( posts.Posts[i].medications === null || !posts.Posts[i].medications ) {
                    painMedications = "None";
                }
                else {
                    painMedications = posts.Posts[i].medications;
                }

                if ( posts.Posts[i].dosage === null || !posts.Posts[i].dosage ) {
                    painDosage = "0";
                }
                else {
                    painDosage = posts.Posts[i].dosage;
                }

                if ( posts.Posts[i].notes === null || !posts.Posts[i].notes ) {
                    painNotes = "None";
                }
                else {
                    painNotes = posts.Posts[i].notes;
                }

                console.log("Intensity " + painIntensity);
                console.log("Characteristic " + painCharacteristic);
                console.log("Duration " + painDuration);
                console.log("Medications " + painMedications);
                console.log("Dosage " + painDosage);
                console.log("Notes " + painNotes);

                var postHTML =
                "<div class='row'>" + 
                    "<div class='header col-sm-12'>" +
                        "<h3>" + posts.Posts[i].body_part + "</h3>" +
                    "</div>" +
                    "<div class='col-12'>" +
                        "<div class='row wrap-all'>" +
                            "<div class='col-lg-6 wrap-two'>" +
                                "<div class='row'>" +
                                    "<div class='section intensity col-sm-6'>" +
                                        "<h4>Intensity Level</h4><p><strong class='attention'>" + painIcon + " " + painIntensity + "</strong></p>" +
                                    "</div>" +
                                    "<div class='section characteristic col-sm-6'>" +
                                        "<h4>Characteristic</h4><p><strong class='attention'>" + painCharacteristic + "</strong></p>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                            "<div class='col-lg-6 wrap-two'>" +
                                "<div class='row'>" +
                                    "<div class='section duration col-sm-6'>" +
                                        "<h4>Duration</h4><p><strong class='attention'>" + painDuration + "</strong></p>" +
                                    "</div>" +
                                    "<div class='section medications col-sm-6'>" +
                                        "<p><strong>Medications:</strong> " + painMedications + "</p>" +
                                        "<p><strong>Dosage:</strong> " + painDosage + "</p>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='section notes col-sm-12'>" +
                        "<h4>Notes</h4><p>" + painNotes + "</p>" +
                    "</div>" +
                    "<div class='col-sm-12 button-wrapper'>" +
                        "<button id='edit' class='btn post-button'><i class='fas fa-edit'></i></button>" +
                        "<button id='trash' class='btn post-button'><i class='fas fa-trash-alt'></i></button>" +
                    "</div>" +
                "</div>";

                postJournal.html(postHTML);

                journalContainer.prepend(postJournal);
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

    $("#journal-post-submit").on("click", function handleFormSubmit(event) {
        console.log("clicked");
        event.preventDefault();
        var newPost = {
            body_part: body_part.val().trim(),
            pain_intensity: journal_pain_intensity.val().trim(),
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