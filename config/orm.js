const connection = require("./connection");

// Object Relational Mapper (ORM)
const orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        cols = cols.toString();
        // Since vals has values for two columns and the burger's name must be passed as a string enclosed in quotes, 
        //we'll split vals like this:
        burger_name = vals[0];
        devoured = vals[1];
        console.log(table, cols, vals);
        let queryString = `INSERT INTO ${table} (${cols}) VALUES ('${burger_name}', ${devoured})`;
        
        console.log(queryString);
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (table, cols, vals, cb) {
        cols = cols.toString();
        id = vals[0];
        devoured = vals[1];
        let queryString = `UPDATE ${table} SET devoured = ${devoured} WHERE id = ${id}`;
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.
module.exports = orm;