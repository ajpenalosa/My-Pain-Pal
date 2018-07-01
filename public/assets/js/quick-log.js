// Displaying value of pain slider in the text area below it

var slider = document.getElementById("pain-level-range");
var output = document.getElementById("pain-value");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}