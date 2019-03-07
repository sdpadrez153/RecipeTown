var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.ic1yj35hed9zx0o5.findAll({}).then(function(ic1yj35hed9zx0o5) {
      res.render("index", {
        msg: "Welcome!",
        Recipes: ic1yj35hed9zx0o5
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/recipe/:id", function(req, res) {
    db.ic1yj35hed9zx0o5.findOne({ where: { id: req.params.id } }).then(function(ic1yj35hed9zx0o5) {
      res.render("Recipes", {
        Recipes: ic1yj35hed9zx0o5
      });
    });
  });
};
