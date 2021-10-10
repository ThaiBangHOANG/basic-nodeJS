import express from "express";
import configViewEngine from "./configs/configViewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app); // setup view engine
initWebRoute(app); // init web route: define the route for the website
initAPIRoute(app); // init API route: start API of the website

app.listen(port, () => {
  console.log(`Node is available at: http://localhost:${port}`);
});
