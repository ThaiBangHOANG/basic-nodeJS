import express from "express";
import configViewEngine from "./configs/configViewEngine";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/", (req, res) => {
  res.send("Hello from Thai Bang");
});

app.listen(port, () => {
  console.log(`Node is available at: http://localhost:${port}`);
});
