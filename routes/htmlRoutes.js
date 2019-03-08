var db = require("../models");
const axios = require("axios");

var randomRecipe = [
  "Steam bun",
  "Chicken Scallopini",
  "Butternut Squash and Chickpea Stew with Israeli Couscous",
  "Carrot Potato Cheese Soup with Corn",
  "Chickpea Soup with Ginger and Coriander",
  "Chilled Ginger Cantaloupe Soup",
  "Creamy Fennel and Leek Soup",
  "Creamy Cauliflower Soup with Bacon, Cheddar, and Chives",
  "Creamy Chilled Cucumber and Avocado Soup",
  "Creamy Roasted Cauliflower and Artichoke Soup",
  "Creamy Spinach Soup",
  "Edamame and Pea Soup with Herbed Lemon Cream",
  "Hearty Spinach and Sausage Soup",
  "Potato Leek Soup",
  "Roasted Autumn Vegetable Chowder",
  "Smoky Spiced Black-Eyed Peas with Bacon",
  "Spicy Pumpkin Soup with Cilantro Pepita Pesto",
  "Bacon-wrapped Beef Tenderloin Steaks with Smoked Paprika Butter",
  "Bacon, Tomato and Blue Cheese Focaccia Sandwich",
  "Bacon and Cheese Quiche",
  "Biscuits with Sausage Gravy",
  "Blue Cheese Stuffed Hamburgers",
  "B.L.A.T. Sandwich with Spicy Chipotle Mayonnaise",
  "Butternut Squash Hash with Mexican Chorizo and Eggs",
  "Cheddar, Chive, and Sour Cream Omelette",
  "Creamy Cauliflower Soup with Bacon, Cheddar, and Chives",
  "Crustless Quiche with Ham, Asparagus, and Gruyere",
  "Curried Chicken Salad",
  "Curried Turkey Salad with Apples, Cranberries, and Walnuts",
  "Easy Egg Salad",
  "Egg in a Nest",
  "Farfalle with Pistachio Cream Sauce",
  "Grilled Chicken and Pineapple Pizza",
  "Grilled Rib Eye with Havarti Horseradish Fondue",
  "Hearty Spinach and Sausage Soup",
  "Herbed Tuna Salad with Feta and Pine Nuts",
  "Homemade Sloppy Joes",
  "Horseradish Meatloaf",
  "Macaroni and Cheese with Bacon, Leeks, and Thyme",
  "Monster Meatball Sandwiches",
  "Pasta with Tomato-Cream Sauce and Fresh Basil",
  "Roasted Chicken Thighs and Cauliflower",
  "Simple Carne Asada",
  "Smoky Spiced Black-Eyed Peas with Bacon",
  "Southwestern Macaroni Casserole",
  "Spice Rubbed Flank Steak",
  "Spiced Turkey Burgers with Green Olives and Feta",
  "Spiked Egg Nog French Toast",
  "The Ultimate Manwich",
  "Three Bean Vegetarian Chili",
  "Tomato Paella with Chorizo",
  "Tofu in Coconut Sauce with Ginger and Lemongrass",
  "Tuna Noodle Casserole",
  "Tuscan Chicken Under a Brick",
  "Veggie Chili Beans and Rice",
  "Whole Wheat Pasta with Browned Butter and Mizithra Cheese"
];

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
    var searchTerm = randomRecipe[
      Math.floor(Math.random() * randomRecipe.length)
    ]
      .split(" ")
      .join("+");
    var app_id = "8c6892d6";
    var api_key = "c07009d42ba3bb6f9fd0fbd2c4c206ca";
    var queryUrl =
      "https://api.edamam.com/search?q=" +
      searchTerm +
      "&app_id=" +
      app_id +
      "&app_key=" +
      api_key +
      "&from=0&to=1";
    axios.get(queryUrl).then(info => {
      var recipes = info.data.hits;
      console.log(recipes[0].recipe);
      res.render("recipeotd", { recipe: recipes[0].recipe });
    });
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
app.post("/calender", function (req, res) {

  var newtable = req.body;

  console.log(newtable);
});