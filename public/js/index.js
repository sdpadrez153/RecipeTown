
$(document).ready(function () {


  var randomRecipe = ["Steam bun", "Chicken Scallopini", "Butternut Squash and Chickpea Stew with Israeli Couscous",
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
    "Veggie Chili Beans and Rice", "Whole Wheat Pasta with Browned Butter and Mizithra Cheese"];
  
// --Appends ROTD--
  var searchTerm = randomRecipe[Math.floor(Math.random() * randomRecipe.length)].split(" ").join("+");
  var app_id = "8c6892d6"
  var api_key = "c07009d42ba3bb6f9fd0fbd2c4c206ca";
  var queryUrl = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=" + app_id + "&app_key=" + api_key + "&from=0&to=1";

  $.get(queryUrl)
    .then(res => {
      var recipes = res.hits;

      for (i = 0; i < recipes.length; i++) {
        var recipeDBinfo = {

          "recipe_name": recipes[i].recipe.label,
          "cautions": recipes[i].recipe.cautions[0],
          "dietLabels": recipes[i].recipe.dietLabels,
          "healthLabels": recipes[i].recipe.healthLabels,
          "ingredientsLines": recipes[i].recipe.ingredientLines,
          "LONGBLOB": recipes[i].recipe.image,
        };
        console.log(recipeDBinfo)
      }
    });
  // console.log($("#formSearch"));
  $("#formSearch").on("submit", function (e) {
    e.preventDefault();
    // alert("submit firing");
    myfunction();
  });

  console.log("We are here")


//  --Appends Recipes Searched--
  function myfunction() {
    var searchItem = document.getElementById("search");
    var searchTerm = searchItem.value;
    console.log(searchTerm)
    var querySearchUrl = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=8c6892d6&app_key=c07009d42ba3bb6f9fd0fbd2c4c206ca&from=0&to=1";
    
    $.get(querySearchUrl)
      .then(res => {
        
        var recipes = res.hits;
        
        
        for (i = 0; i < recipes.length; i++) {
          var recipeDBinfo2 = {
            
            "LONGBLOB": recipes[i].recipe.image,
            "recipe_name": recipes[i].recipe.label,
            "cautions": recipes[i].recipe.cautions[0],
            "dietLabels": recipes[i].recipe.dietLabels,
            "healthLabels": recipes[i].recipe.healthLabels,
            "ingredientsLines": recipes[i].recipe.ingredientLines,
            "calories": recipes[i].recipe.calories,
            "totalTime": recipes[i].recipe.totalTime,
          };
          var LONGBLOB = $("<img>").attr("src", recipeDBinfo2.LONGBLOB);
          var recipe_name = $("<h2>").text(recipeDBinfo2.recipe_name);
          var dietLabels = $("<p2>").text(recipeDBinfo2.dietLabels);
          var healthLabels = $("<p3>").text("Health Labels: " + recipeDBinfo2.healthLabels);
          var ingredientsLines = $("<p4>").text("Ingredients: " + recipeDBinfo2.ingredientsLines);
          var calories = $("<p5>").text("Total Calories: " + recipeDBinfo2.calories);
          var totalTime = $("<p6>").text("Total Cook Time: "+ recipeDBinfo2.totalTime + " min");
          
          console.log(recipeDBinfo2);
          console.log(recipeDBinfo2.recipe_name);
        }
        $("#searchItem").append(LONGBLOB, recipe_name);
        $("#nutrition").append(ingredientsLines);
        $("#cal").append(calories);
        $("#cookTime").append(totalTime);



        $("#search").empty();
       });

      }

});
