$(document).ready(function () {
    
    var login = $("#loginForm");

    var myEmail = $("#loginEmail");
    var myPass = $("#loginPassword");
    var loginHelp = $("#loginHelp");

    login.on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var existingUser = {
            email: myEmail.val().trim(),
            password: myPass.val().trim()
        };

        $.post('/login', existingUser, function(data) {
            if (data.code === 504) {
                loginHelp.html("Your log-in information is incorrect! Please revise your credentials.");
                
                loginHelp.css(
                    {
                        "visibility": "visible",
                        "font-style": "italic",
                        "font-weight": "bold"
                    }
                );
            } else if (data.code === 505) {
                loginHelp.html("An account does not exist under that email address!");

                loginHelp.css(
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
    });
});
