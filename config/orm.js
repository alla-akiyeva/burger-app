const connection = require("./connection");

// Object Relational Mapper (ORM)
const orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            // console.log("Burger.js is passing " + table)
            // console.log("I think this is working", result);
            cb(result);
        });
    },
    insertOne: function(table, burger_name, cb) {
        let queryString = "INSERT INTO ?? VALUES ??";
        connection.query(queryString, [table, burger_name], function (err, result) {
            if (err) throw err;
            cb(results);
            console.log("This shouldn't be showing up", result);
        });
    },
    updateOne: function (table, devoured, id, cb) {
        let queryString = "UPDATE ?? SET ?? = FALSE";
        connection.query(queryString, [table, devoured, id], function (err, result) {
            if (err) throw err;
            cb(results);
            console.log("this won't show up right now either", result);
        });
    }
}

// UPDATE table_name SET field1 = new-value1, field2 = new-value2
// [WHERE Clause]

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()


// Export the ORM object in module.exports.
module.exports = orm;