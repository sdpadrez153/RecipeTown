var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var recipe = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  recipe.all(function(data) {
    var hbsObject = {
      recipes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipes", function(req, res) {
  recipe.create([
    "recipe_name", "image", "cautions", "dietLabels", "healthLabels", "ingredientLines"
  ], [
    req.body.recipe_name, req.body.image, req.body.cautions, req.body.dietLabels, req.body.healthLabels, req.body.ingredientLines
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// do not think below is needed

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;