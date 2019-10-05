const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

//Serve static content for the app from the "public" directory
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);

// Start the server to it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on " + PORT);
});