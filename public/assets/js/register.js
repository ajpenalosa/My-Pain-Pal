$(document).ready(function() {

    var register = $("#regForm");
    var fName = $("#first-name");
    var lName = $("#last-name");
    var emAddr = $("#email");
    var pWord = $("#password");
    var bday = $("#dob");
    var gndr = $("#gender");

    register.on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        if (fName.val() === "" || lName.val() === "" || emAddr.val() === "" || pWord.val() === "" || bday.val() === "") {
            alert("Please complete all fields before submitting!");
        } else {
            var newUser = {
                first_name: fName.val().trim(),
                last_name: lName.val().trim(),
                email: emAddr.val().trim(),
                password: pWord.val().trim(),
                dob: bday.val(),
                gender: gndr.val()
            };
            console.log(newUser);

            $.post('/', newUser, function (data) {
                console.log(data.token);

                if (data) {
                    // alert("Registration was successful, welcome to MyPainPal!");
                    window.location.href = '/dashboard';
                    
                } else {
                    console.log("Error!");
                    location.reload();
                };
            });
        }
    });
})