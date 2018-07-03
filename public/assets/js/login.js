$(document).ready(function () {
    
    var login = $("#loginForm");

    var emAddr = $("#loginEmail");
    var pWord = $("#loginPassword");

    login.on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var existingUser = {
            email: emAddr.val().trim(),
            password: pWord.val().trim()
        };

        console.log(existingUser);

        $.post('/login', existingUser, function(data) {
            if (data.code !== 504) {
                alert("Successfully logged in!");
                location.assign('/dashboard');
            } else {
                alert(data.failed);
                location.reload();
            };
        });
    });
})