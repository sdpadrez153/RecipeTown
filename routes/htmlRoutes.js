var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Recipes.findAll({}).then(function(dbRecipes) {
      res.render("index", {
        msg: "Welcome!",
        Recipes: dbRecipes
      });
    });
  });

  app.get("/calendar", function(req, res) {
    res.render("calendar");
  });
  
  app.get("/recipeotd", function(req, res) {
    res.render("recipeotd");
  });
  
  app.get("/contact", function(req, res) {
    res.render("contact");
  });
  // Load example page and pass in an example by id
  app.get("/recipe/:id", function(req, res) {
    db.Recipes.findOne({ where: { id: req.params.id } }).then(function(recipe) {
      res.render("Recipes", {
        Recipes: recipe
      });
    });
  });
};
