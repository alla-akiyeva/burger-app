const connection = require("./connection");

// Object Relational Mapper (ORM)
const orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, burger_name) {
        var queryString = "INSERT INTO ?? VALUES ??";
        connection.query(queryString, [table, burger_name], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, devoured) {
        var queryString = "UPDATE ?? SET ?? = FALSE";
        connection.query(queryString, [table, devoured], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()


// Export the ORM object in module.exports.
module.exports = orm;