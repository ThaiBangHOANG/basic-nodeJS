import express from "express";
import configViewEngine from "./configs/configViewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Node is available at: http://localhost:${port}`);
});
