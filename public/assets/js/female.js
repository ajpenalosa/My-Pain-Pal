$(document).ready(function() {

    var human = new HumanAPI("embedded-human"); 

console.log("Listening for human.ready event");

human.on("human.ready", function () {
    console.log("Human loaded!");
});

var bodyPart;
var userFemaleArr = [];

human.on("scene.picked",
    function (pickEvent) {
        if(pickEvent.mode === "singleClick") {
            bodyPart = pickEvent.objectId;
            console.log("BODY PART " + bodyPart);
        } 
        userFemaleArr.push(bodyPart);
        console.log("body part array: ", userFemaleArr);
       
    });

$("#btn-save").on("click", function(event) {
    console.log("SAVE: " + bodyPart);
    $("#body-part").append(bodyPart);
});


var objectID = [];
var mode = document.getElementById('female');

mode.onClick = function () {

        human.send("scene.pickingMode", "highlight");
    };
var save = document.getElementById('save');
//save the current scene, use data in future if needed
save.onclick = function (pickEvent) {    
    $("#female").hide();

    objectID.push(bodyPart);

    console.log("Saved obj on click: " , objectID);

};


});


