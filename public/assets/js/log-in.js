$(document).ready(function () {
    
    var login = $("#loginForm");

    var myEmail = $("#loginEmail");
    var myPass = $("#loginPassword");
    var reviseLogin = $("#loginHelp");
    var modalLogin = $("#modalLogin");
    var wrongCred = $("#reviseCred");

    login.on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var existingUser = {
            email: myEmail.val().trim(),
            password: myPass.val().trim()
        };

        $.post('/login', existingUser, function(data) {
            if (data.code === 504) {
                location.assign('/login');
                wrongCred.show();
                modalLogin.show();
                reviseLogin.show();
            } else {
                location.assign('/dashboard');
            };
        });
    });
    
});