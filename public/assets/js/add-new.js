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
    var female_div = $("#female-div");
    var male_div = $("#male-div");
    var postId;

    var url = window.location.search;
    var userId;
    var postId;
    var updating = false;

    var humanFemale = new HumanAPI("embedded-human");
    var humanMale = new HumanAPI("embeddedHuman");
    var bodyPart;
    var userFemaleArr = [];
    var userMaleArr = [];
    female_div.hide();
    male_div.hide();


    var postSlider = document.getElementById("post-pain-level-range");
    var postOutput = document.getElementById("post-pain-value");
    postOutput.innerHTML = postSlider.value;

    console.log('whaaaat')
    console.log(url.indexOf("?post_id="));

    if (url.indexOf("?post_id=") !== -1) {
        console.log("where here!!!");
      postId = url.split("=")[1];
      console.log('THIS IS THE POST ID')
      console.log(postId);
      getPostData(postId, "post");
    }

    postSlider.oninput = function () {
        console.log("slider works");
        postOutput.innerHTML = this.value;
    }

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

    if (url.indexOf("?post_id=") !== -1) {
        postId = url.split("=")[1];
        getPostData(postId, "post");
    }

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
            id: userId.val()
        };

        if(updating) {
            newPost.id = postId;
            updatePost(newPost);
        }
        else {
            console.log(newPost);
            submitPost(newPost); 
        }
       
    });

    function maleSelect() {

        humanMale.on("scene.picked", function (pickEvent) {
            if (pickEvent.mode === "singleClick") {
                bodyPart = pickEvent.objectId;
                console.log("BODY PART " + bodyPart)
            }
            userMaleArr.push(bodyPart);
            console.log("body part array: ", userMaleArr);
        });

        $("#btn-save-male").on("click", function (event) {

            console.log("SAVED: " + bodyPart);
            var newBodyPart = bodyPart.replace(/_/g, " ").replace("ID", "").split("-");

            console.log("Saved F obj on click: ", newBodyPart[1]);
            console.log("the one should  be  F split up again :", newBodyPart)

            $("#body-part").val(newBodyPart[1]);
            keepUserIn(userId);

        });

        var mode = document.getElementById('male');

        mode.onClick = function () {
            human.send("scene.pickingMode", "highlight");
        };

    };

    maleSelect();

    function femaleSelect() {

        humanFemale.on("scene.picked",
            function (pickEvent) {
                if (pickEvent.mode === "singleClick") {
                    bodyPart = pickEvent.objectId;
                    console.log("BODY PART " + bodyPart);
                }
                userFemaleArr.push(bodyPart);
                console.log("body part array: ", userFemaleArr);

            });

        $("#btn-save-female").on("click", function (event) {

            console.log("SAVED: " + bodyPart);
            var newBodyPart = bodyPart.replace(/_/g, " ").replace("ID", "").split("-");

            console.log("Saved F obj on click: ", newBodyPart[1]);
            console.log("the one should  be  F split up again :", newBodyPart)
            $("#body-part").val(newBodyPart[1]);
            keepUserIn(userId);

        });

        var mode = document.getElementById('female');

        mode.onClick = function () {
            human.send("scene.pickingMode", "highlight");
        };
    }

    femaleSelect();

    function submitPost(Post) {
        $.post("/api/dashboard/", Post, function () {
            window.location.href = "/dashboard";
            keepUserIn(userId);
        });
         keepUserIn(userId);
    }

    function getPostData(id) {
        var queryUrl = "/api/journal/" + id;
        console.log("BEFORE THAT SHIT")
        $.get(queryUrl, function (data) {
        console.log("NOT DATA !!!!!!!")
            if (data) {
                console.log("Hi HI hi ", data);
                body_part.val(data.body_part);
                journal_pain_intensity.val(data.pain_intensity);
                pain_characteristics.val(data.pain_characteristics);
                pain_duration.val(data.pain_duration);
                medications.val(data.medications);
                dosage.val(data.dosage);
                notes.val(data.notes);
                usersId = data.id;

                updating = true;
            }
        });
    }

    function updatePost(Posts) {
        $.ajax({
            method: "PUT",
            url: "/api/journal",
            data: Posts
        }).then(function() {
            window.location.href = "/journal";
        });
    }

});