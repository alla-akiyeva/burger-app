const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Create the router for the app, and export the router at the end of your file.

router.get("/", function(req, res) {  // This route works
    burger.all(function(data) {
        console.log("Burger Controller!!"); 
        // Passing results as an object so we can iterate through them in Handlebars
        const hbsObject = {
            burgers: data
        };
        console.table(data);
        console.log(data[0].burger_name);
        res.render("index", hbsObject);
    });
    // res.render("index", {}); // - This part works, outside the function. The function above does not seem to work.
});

router.post("/api/burgers", function(req, res) {  // This route does not work
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        console.log("Inserted a burger into db, i think");
        //res.json({ id: result.insertId });
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let id = req.body.id;
    let devoured = req.body.devoured;

    burger.update(["id", "devoured"], [id, devoured], function (result) {
        console.log("controller, burger inserted");
        res.status(200).end();
    });
});

module.exports = router;