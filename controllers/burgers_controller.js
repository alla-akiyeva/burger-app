const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Create the router for the app, and export the router at the end of your file.

router.get("/", function(req, res) {
    burger.all(function(data) {
        // Passing results as an object so we can iterate through them in Handlebars
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) { 
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        console.log("Inserted a burger into db");
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let id = req.body.id;
    let devoured = req.body.devoured;

    burger.update(["id", "devoured"], [id, devoured], function (result) {
        console.log("burger devoured");
        res.status(200).end();
    });
});

module.exports = router;