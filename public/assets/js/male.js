$(document).ready(function() {

    var selectMessageWrapper = $(".select-message-wrapper");
    var selectMessage = $(".select-message");
    var bodyLoading = $(".body-loading");

    var human = new HumanAPI("embeddedHuman");

    var humanLoaded = false;

    console.log("Listening for human.ready event");

    human.on("human.ready", function () {
        console.log("Human loaded!");
        humanLoaded = true;
        bodyLoading.hide();
        selectMessage.show();
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
            selectMessageWrapper.show();
            if(!humanLoaded) {
                console.log("Body is still loading");
                selectMessage.hide();
                bodyLoading.show();
            }
            else {
                console.log("No body part selected");
                bodyLoading.hide();
                selectMessage.show();
            }
            $(".close-message").on("click", function() {
                selectMessageWrapper.hide();
            });
        }

        objectId.push(bodyPart);

        console.log("Saved obj on click: ", objectId);

    };



});
