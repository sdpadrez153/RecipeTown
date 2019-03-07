var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.ic1yj35hed9zx0o5.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
};
