const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Create the router for the app, and export the router at the end of your file.

router.get("/", function(req, res) {
    // burger.all(function(data) {
    //     const hbsObject = {
    //         burgers: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", {hbsObject});
    // });
    res.render("index", {});
});

router.post("/api/cats", function(req, res) {
    burger.insert([
        "name"
    ], [
        req.body.name
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;