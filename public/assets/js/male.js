$(document).ready(function() {

    var human = new HumanAPI("embeddedHuman");

    console.log("Listening for human.ready event");

    human.on("human.ready", function () {
        console.log("Human loaded!");
    });

    var bodyPart;
    var userMaleArr = [];

    human.on("scene.picked", function (pickEvent) {
        if (pickEvent.mode === "singleClick") {
            bodyPart = pickEvent.objectId;
            console.log("BODY PART " + bodyPart)
        }
        userMaleArr.push(bodyPart);
        console.log("body part array: ", userMaleArr);
    });

    $("#btn-save-male").on("click", function (event) {
        console.log("SAVED: " + bodyPart);
        $("#body-part").append(bodyPart);
    });

    var objectId = [];

    var mode = document.getElementById('male');

    mode.onClick = function () {
        human.send("scene.pickingMode", "highlight");
    };

    var save = document.getElementById('save-male');

    save.onclick = function (pickEvent) {

        if (bodyPart) {
              console.log("Body part selected");
              $("#body-modal").modal("hide");
        }
        else {
            console.log("No body part selected");
            $(".select-message-wrapper").show();
            $(".close-message").on("click", function() {
                $(".select-message-wrapper").hide();
            })
        }

        objectId.push(bodyPart);

        console.log("Saved obj on click: ", objectId);

    };



});
