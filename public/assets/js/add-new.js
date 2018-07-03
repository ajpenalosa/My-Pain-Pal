var postSlider = document.getElementById("post-pain-level-range");
var postOutput = document.getElementById("post-pain-value");
postOutput.innerHTML = postSlider.value;

postSlider.oninput = function () {
    console.log("slider works");
    postOutput.innerHTML = this.value;
}
