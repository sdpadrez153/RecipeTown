var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/recipes", function (req, res) {
    db.Recipes.findAll({}).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.get("/api/users", function (req, res) {
    db.Users.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

}
