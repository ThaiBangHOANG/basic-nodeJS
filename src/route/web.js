import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHompage);

  router.get("/about", (req, res) => {
    res.send(`I'm Thai Bang`);
  });

  return app.use("/api/v1/", router);
};

export default initWebRoute;
