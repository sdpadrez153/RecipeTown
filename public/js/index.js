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
        "cautions": recipes[i].recipe.cautions[0].toString(),
        "dietLabels": recipes[i].recipe.dietLabels.toString(),
        "healthLabels": recipes[i].recipe.healthLabels.toString(),
        "ingredientsLines": recipes[i].recipe.ingredientLines.toString(),
        "LONGBLOB": recipes[i].recipe.image,
      };
      console.log(recipeDBinfo)
    }
  });

$(document).ready(function () {
  $(".btn").on("click", function (event) {
    // console.log(event); 
    $("#modal1").modal();
    event.preventDefault();
  });

  $("#login").on("submit", function (event) {
    event.preventDefault();
    var newUser = {
      user_name: $("#username").val().trim(),
      password: $("#password").val().trim(),
    }
    $.ajax({
      type: "POST",
      url: "/api/users",
      data: newUser
    }).then(function (data) {
      location.reload();
      console.log("hi");
    });
  });
});

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

$(document).ready(function () {
  $(".btn").on("click", function (event) {
    console.log("event");
    $('#modal1').modal();
    event.preventDefault();

  });
  $("#new_user").on("submit", function (event) {
    event.preventDefault();
    console.log("newUser")
    // var newUser = {
    //     user_name: $("#username").val().trim(),
    // };

    // $.ajax("/api/recipes", {
    //     type: "POST",
    //     url: "/api/recipes",
    //     data: newUser
    // }).then(function (data) {
    //     location.reload();
    //     console.log(newUser);
    // });
  });
});

$("#new_user").on("submit", function (event) {
  // event.preventDefault();
  console.log("newUser")
  // var newUser = {
  //     user_name: $("#username").val().trim(),
  // };

  // $.ajax("/api/recipes", {
  //     type: "POST",
  //     url: "/api/recipes",
  //     data: newUser
  // }).then(function (data) {
  //     location.reload();
  //     console.log(newUser);
  // });
});
