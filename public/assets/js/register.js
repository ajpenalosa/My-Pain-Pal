$(document).ready(function() {

    var register = $("#regForm");
    
    var fName = $("#first-name");
    var lName = $("#last-name");
    var emAddr = $("#email");
    var pWord = $("#password");
    var bday = $("#dob");
    var gndr = $("#gender");
    var registerHelp = $("#registerHelp");

    register.on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var newUser = {
            first_name: fName.val().trim(),
            last_name: lName.val().trim(),
            email: emAddr.val().trim(),
            password: pWord.val().trim(),
            dob: bday.val(),
            gender: gndr.val()
        };

        if (!newUser.first_name || !newUser.last_name || !newUser.email || !newUser.password || !newUser.dob || !newUser.gender) {
            registerHelp.html("Please fill out all fields before submitting!");

            registerHelp.css(
                {
                    "visibility": "visible",
                    "font-style": "italic",
                    "font-weight": "bold"
                }
            );
        } else {
            $.post('/register', newUser, function (data) {
                if (data.code === 304) {
                    registerHelp.html("Email address is in use! Please revise your input.");
                    
                    registerHelp.css(
                        {
                            "visibility": "visible",
                            "font-style": "italic",
                            "font-weight": "bold"
                        }
                    );
                } else {
                    location.assign('/dashboard');
                };
            });          
        }
    });
    
})