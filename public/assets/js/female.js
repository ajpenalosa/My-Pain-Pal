
var human = new HumanAPI("embedded-human"); 

console.log("Listening for human.ready event");

human.on("human.ready", function () {
    console.log("Human loaded!");
});

var bodyPart;
// console.log("Pick or hover over something!");
human.on("scene.picked",
    function (pickEvent) {
        if(pickEvent.mode === "singleClick") {
            bodyPart = pickEvent.objectId;
            console.log("BODY PART " + bodyPart)
        } 
        // console.log("'scene.picked' event: " + JSON.stringify(pickEvent));
    });

$("#btn-save").on("click", function(event) {
    console.log("SAVE: " + bodyPart);
})    

var objectID = [];
var mode = document.getElementById('mode');
// var modeText = document.getElementById('modeText')
//switch modes (highlight vs. annotate)
mode.onClick = function () {

        human.send("scene.pickingMode", "highlight");
    };
var save = document.getElementById('save');
//save the current scene, use data in future if needed
save.onclick = function () {
    human.send("scene.capture", function (scene) {
        savedScene = scene;
        //...do something with savedScene (e.g. us it to restore to scene later)...
    });
};

var select = true;

