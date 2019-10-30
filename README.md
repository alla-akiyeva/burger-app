# Burger App

Eat-Da-Burger! or Burger App is a restaurant app that lets users input the names of burgers they would like to eat.
It is a simple fullstack application built with the use of MySQL, Node, Express, Handlebars and an ORM to query the database. 

## How It Works

Whenever a user submits a burger's name, the app will display the burger on the left side of the page - waiting to be devoured. 
Each burger in the waiting area also has an Eat Me! button. When the user clicks it, the burger will move to the right side of the page. 
The app will store every burger in a database, whether devoured or not.

![](/public/assets/img/Eat-Da-Burger.gif)

## Deployment
This app is deployed on Heroku: https://burger-mysqlapp.herokuapp.com/
A JawsDB remote database was created to deploy this MySQL application.

## Installing
To run this app locally, clone the repo and run  `npm i` to install dependencies. You will also need to have a mysql server running on your computer. Edit the database information in the `connection.js` file to ensure that it points to your database. 

## Built With
* [Express](https://www.npmjs.com/package/express) - a Node.js module, used for routing
* [Handlebars](https://www.npmjs.com/package/express-handlebars) - templating engine used to generate HTML
* [MySQL](https://www.npmjs.com/package/mysql) - Node package for MySQL
