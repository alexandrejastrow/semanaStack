const { Router } = require("express");
const SearchController = require("./controllers/SearchController");
const DevControllers = require("./controllers/DevController");
const routes = Router();

routes.get("/devs", DevControllers.index);
routes.get("/search", SearchController.index);
routes.post("/devs", DevControllers.store);
module.exports = routes;
