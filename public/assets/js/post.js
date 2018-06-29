$(document).ready(function () {

var postsContainer = $(".posts-container");

$(document).on("click", "button.createNewPost", createNewPost);

var posts;

var url = window.location.search;
// var userId;

function getPosts() {
var userIdString = userId || "";

if (userIdString){
    userIdString = "/id/" + userIdString;
}
$.get("/api/posts/" + userId, function(data){
console.log("posts", data);
posts = data;
if(!posts || !posts.length){
    displayEmpty();
}
else {
    initializeRows();
}
});
}

getPosts();

function initializeRows(){
    postsContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++){
        postsToAdd.push(createNewRow(post[i]));
    }
    postsContainer.append(postsToAdd);
}

function createNewRow(post){

    
}




});