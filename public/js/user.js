var $submitBtn = $("#pgone");

var API = {
    saveUser: function (user) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/users",
            data: JSON.stringify(user)
        });
    },
    getUsers: function () {
        return $.ajax({
            url: "api/users",
            type: "GET"
        });
    },
    deleteUser: function (id) {
        return $.ajax({
            url: "api/users/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();

    var user = {
        fullName: $("#fname").val().trim(),
        street: $("#autocomplete").val().trim(),
        city: $("#inputCity").val().trim(),
        ustate: $("#inputState").val().trim(),
        zip: $("#inputZip").val().trim(),
        country: $("#inputCountry").val().trim(),
        email: $("#emailc").val().trim(),
        phone: $("#numb").val().trim(),
        network: $("#site").val().trim(),
        net_username: $("#nun").val().trim(),
        siteurl: $("#url").val().trim()
    };

    API.saveUser(user).then(function () {
        console.log("yuh")
    });

    $("#fname").val().trim(),
        $("#autocomplete").val().trim(),
        $("#inputCity").val().trim(),
        $("#inputState").val().trim(),
        $("#inputZip").val().trim(),
        $("#inputCountry").val().trim(),
        $("#emailc").val().trim(),
        $("#numb").val().trim(),
        $("#site").val().trim(),
        $("#nun").val().trim(),
        $("#url").val().trim()
};
$submitBtn.on("click", handleFormSubmit);
