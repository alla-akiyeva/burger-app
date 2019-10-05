var orm = require("../config/orm");

// Inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    all: function (cb) {
        console.log("here"); // - This part, outside the function, is working
        orm.selectAll("burgers", function (res) {
            cb(res);
            // console.log("this is orm", res);
        })
    },
    insert: function (burger_name, cb) {
        orm.insertOne("burgers", burger_name, function (res) {
            cb(res);
        })
    },
    update: function (devoured, id, cb) {
        orm.updateOne("burgers", devoured, id, function (res) {
            cb(res);
        })
    }

    // all: orm.selectAll("burgers"),
    // inset: orm.insertOne("burgers", "burger_name"),
    // update: orm.updateOne("burgers", "devoured")
}


// Export at the end of the burger.js file.
module.exports = burger;