import express from "express";
import configViewEngine from "./configs/configViewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";

require("dotenv").config();

let morgan = require("morgan");

const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  // this middleware use for check the status
  // if nothing wrong, the function next will be call
  // and after that the code continue to run
  // this is a simple example of a middleware
  next();
});

app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app); // setup view engine
initWebRoute(app); // init web route: define the route for the website
initAPIRoute(app); // init API route: start API of the website

// hanld middleware 404 not found
app.use((req, res) => {
  return res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`Node is available at: http://localhost:${port}`);
});
