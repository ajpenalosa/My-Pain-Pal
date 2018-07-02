$(document).ready(function () {
    var register = ("#loginForm");

    var emAddr = $("#loginEmail");
    var pWord = $("#loginPassword");

    $(register).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var existingUser = {
            email: emAddr.val().trim(),
            password: pWord.val().trim()
        };

        console.log(existingUser);

        $.post('/', existingUser, function(data) {
            if (data) {
                // alert("Successfully logged in!");
                window.location.href = '/dashboard';
            } else {
                alert("Log-in was unsuccessful!");
            };
        });
    });
})