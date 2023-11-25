const helloRouter = require("express").Router();

helloRouter.get("/", (_, response) => {
  response.json({ hello: "world" });
});

module.exports = helloRouter;
