

// When "add" button is clicked, get the value of the form and send it to database - front end API call

$(document).ready(function() {

    $("#add").on("click", function(event) {
        event.preventDefault();
        console.log($("#new-burger").val());
        let newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: false
        };

        // Send the POST API request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added (supposedly)");
                // Reload the page to get the updated burger list
                location.reload();
            }
        );
    });
});

// When "Eat it!" button is clicked, the "devoured" value is the corresponding burger is changed into TRUE. 