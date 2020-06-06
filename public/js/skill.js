var $submitBtn = $("#pgfour");

var API = {
    saveSkill: function (skill) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/skills",
            data: JSON.stringify(skill)
        });
    },
    getSkills: function () {
        return $.ajax({
            url: "api/skills",
            type: "GET"
        });
    },
    deleteSkill: function (id) {
        return $.ajax({
            url: "api/skills/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();

    var skill = {
        skillName: $("#skill").val().trim(),
        skillLevel: $("#lvl").val().trim(),
        keyword: $("#keyword").val().trim()
    }


    API.saveSkill(skill).then(function () {
        console.log("yuh")
    });

    $("#skill").val().trim(),
        $("#lvl").val().trim(),
        $("#keyword").val().trim()

        submitPost(skill);


};

function submitPost(skill) {
    $.post("/api/skills", skill, function () {
        window.location.href = "/mancerpt5";
    });
}
$submitBtn.on("click", handleFormSubmit);
