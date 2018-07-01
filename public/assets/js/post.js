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

            console.log("is this the last post ", usersPosts[usersPosts.length-1].notes)
            
            if (!posts || !posts.length) {
                displayEmptyForm();
            } else {
                for (var i = 0; i < usersPosts.length; i++) {

                    var userPostsDiv = $("<div>");
                    userPostsDiv.text(usersPosts[i].notes);
                    $("#displayPosts").append(userPostsDiv)
                }
            }
        });
    }

    getPosts();

    function initializeRows() {
        postsContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(NewRow(posts[i]));
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
            body_part: body_part.val().trim(),
            pain_intensity: pain_intensity.val().trim(),
            pain_characteristics: pain_characteristics.val().trim(),
            pain_duration: pain_duration.val().trim(),
            medications: medications.val().trim(),
            dosage: dosage.val().trim(),
            notes: notes.val().trim(),
        }

        console.log(newPost);

        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        } else {
            submitPost(newPost);
        }


    });

    function submitPost(Post) {
        $.post("/api/posts/", Post, function () {
            window.location.href = "/posts";
        });
    }



    // function getPosts(category) {
    //     var categoryString = category || "";
    //     if (categoryString) {
    //         categoryString = "/category/" + categoryString;
    //     }
    //     $.get("/api/posts" + categoryString, function (data) {
    //         console.log("Posts", data);
    //         posts = data;
    //         if (!posts || !posts.length) {
    //             displayEmpty();
    //         } else {
    //             initializeRows();
    //         }
    //     });
    // }



    // function deletePost(id) {
    //     $.ajax({
    //             method: "DELETE",
    //             url: "/api/posts/" + id
    //         })
    //         .then(function () {
    //             getPosts(postCategorySelect.val());
    //         });
    // }


    // getPosts();


    // function initializeRows() {
    //     blogContainer.empty();
    //     var postsToAdd = [];
    //     for (var i = 0; i < posts.length; i++) {
    //         postsToAdd.push(createNewRow(posts[i]));
    //     }
    //     blogContainer.append(postsToAdd);
    // }


    // function createNewRow(post) {
    //     var newPostCard = $("<div>");
    //     newPostCard.addClass("card");
    //     var newPostCardHeading = $("<div>");
    //     newPostCardHeading.addClass("card-header");
    //     var deleteBtn = $("<button>");
    //     deleteBtn.text("x");
    //     deleteBtn.addClass("delete btn btn-danger");
    //     var editBtn = $("<button>");
    //     editBtn.text("EDIT");
    //     editBtn.addClass("edit btn btn-default");
    //     var newPostTitle = $("<h2>");
    //     var newPostDate = $("<small>");
    //     var newPostCategory = $("<h5>");
    //     newPostCategory.text(post.category);
    //     newPostCategory.css({
    //         float: "right",
    //         "font-weight": "700",
    //         "margin-top": "-15px"
    //     });
    //     var newPostCardBody = $("<div>");
    //     newPostCardBody.addClass("card-body");
    //     var newPostBody = $("<p>");
    //     newPostTitle.text(post.title + " ");
    //     newPostBody.text(post.body);
    //     var formattedDate = new Date(post.createdAt);
    //     formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    //     newPostDate.text(formattedDate);
    //     newPostTitle.append(newPostDate);
    //     newPostCardHeading.append(deleteBtn);
    //     newPostCardHeading.append(editBtn);
    //     newPostCardHeading.append(newPostTitle);
    //     newPostCardHeading.append(newPostCategory);
    //     newPostCardBody.append(newPostBody);
    //     newPostCard.append(newPostCardHeading);
    //     newPostCard.append(newPostCardBody);
    //     newPostCard.data("post", post);
    //     return newPostCard;

    // }


    // function handlePostDelete() {
    //     var currentPost = $(this)
    //         .parent()
    //         .parent()
    //         .data("post");
    //     deletePost(currentPost.id);
    // }

    // function handlePostEdit() {
    //     var currentPost = $(this)
    //         .parent()
    //         .parent()
    //         .data("post");
    //     window.location.href = "/cms?post_id=" + currentPost.id;
    // }


    // function displayEmpty() {
    //     blogContainer.empty();
    //     var messageH2 = $("<h2>");
    //     messageH2.css({
    //         "text-align": "center",
    //         "margin-top": "50px"
    //     });
    //     messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
    //     blogContainer.append(messageH2);
    // }

    // function handleCategoryChange() {
    //     var newPostCategory = $(this).val();
    //     getPosts(newPostCategory);
    // }


    // if (url.indexOf("?post_id=") !== -1) {
    //     postId = url.split("=")[1];
    //     getPostData(postId);
    // }


    // $(cmsForm).on("submit", function handleFormSubmit(event) {
    //     event.preventDefault();


    //     if (!titleInput.val().trim() || !bodyInput.val().trim()) {
    //         return;
    //     }
    //     var newPost = {
    //         title: titleInput.val().trim(),
    //         body: bodyInput.val().trim(),
    //         category: postCategorySelect.val()
    //     };

    //     console.log(newPost);


    //     if (updating) {
    //         newPost.id = postId;
    //         updatePost(newPost);
    //     } else {
    //         submitPost(newPost);
    //     }
    // });


    // function submitPost(Post) {
    //     $.post("/api/posts/", Post, function () {
    //         window.location.href = "/blog";
    //     });
    // }


    // function getPostData(id) {
    //     $.get("/api/posts/" + id, function (data) {
    //         if (data) {
    //             titleInput.val(data.title);
    //             bodyInput.val(data.body);
    //             postCategorySelect.val(data.category);

    //             updating = true;
    //         }
    //     });
    // }


    // function updatePost(post) {
    //     $.ajax({
    //             method: "PUT",
    //             url: "/api/posts",
    //             data: post
    //         })
    //         .then(function () {
    //             window.location.href = "/blog";
    //         });
    // }


});