var orm = require("../config/orm");

// Inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    insert: function (name, cb) {
        orm.insertOne("burgers", name, function (res) {
            cb(res);
        })
    },
    update: function (devoured, cb) {
        orm.updateOne("burgers", devoured, function (res) {
            cb(res);
        })
    }
}
// Export at the end of the burger.js file.

module.exports = burger;