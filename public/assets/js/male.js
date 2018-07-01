var human = new HumanAPI ("embeddedHuman");

console.log("Listening for human.ready event");

human.on("human.ready", function() {
    console.log("Human loaded!");
});

var bodyPart;

human.on("scene.picked", function(pickEvent) {
    if(pickEvent.mode === "singleClick") {
        bodyPart = pickEvent.objectId;
        console.log("BODY PART " + bodyPart)
    }
});

$("#btn-maleSave").on("click", function(event) {
    console.log("SAVED: " + bodyPart)
});

var objectID = [];

var mode = document.getElementById('mode');

mode.onClick = function () {
    human.send("scene.pickingMode", "highlight");
};

var save = document.getElementById('saveMale');

save.onclick = function() {
    human.send("scene.capture", function(scene) {
        savedScene = scene;

    });
};