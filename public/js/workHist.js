var $submitBtn = $("#pgsix");

var API = {
    saveWorkHistory: function (workhistory) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/workhistorys",
            data: JSON.stringify(workhistory)
        });
    },
    getWorkHistorys: function () {
        return $.ajax({
            url: "api/workhistorys",
            type: "GET"
        });
    },
    deleteWorkHistory: function (id) {
        return $.ajax({
            url: "api/workhistorys/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();

    var workhistory = {
        nameComp: $("#nameComp").val().trim(),
        title: $("#title").val().trim(),
        startDate: $("#startDate").val().trim(),
        endDate: $("#endDate").val().trim(),
        description: $("#description").val().trim(),
        nameComp2: $("#nameComp2").val().trim(),
        title2: $("#title2").val().trim(),
        startDate2: $("#startDate2").val().trim(),
        endDate2: $("#endDate2").val().trim(),
        description2: $("#description2").val().trim(),
    }


    API.saveWorkHistory(workhistory).then(function () {
        console.log("yuh")
    });

    $("#nameComp").val().trim(),
        $("#title").val().trim(),
        $("#startDate").val().trim(),
        $("#endDate").val().trim(),
        $("#description").val().trim(),
        $("#nameComp2").val().trim(),
        $("#title2").val().trim(),
        $("#startDate2").val().trim(),
        $("#endDate2").val().trim(),
        $("#description2").val().trim(),

        submitPost(workhistory);


};

function submitPost(workhistory) {
    $.post("/api/workhistorys", workhistory, function () {
        window.location.href = "/mancerptcomplete";
    });
}
$submitBtn.on("click", handleFormSubmit);
