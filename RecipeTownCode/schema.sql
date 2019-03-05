-- Create the database task_saver_db and specified it for use.
DROP DATABASE IF EXISTS recipetown_db;
CREATE DATABASE recipetown_db;
USE recipetown_db;

-- Create the table tasks.
CREATE TABLE recipes
(
id int NOT NULL AUTO_INCREMENT,
recipe_name VARCHAR(100) NOT NULL,
image LONGBLOB NOT NULL,
cautions VARCHAR(100) NOT NULL,
dietLabels VARCHAR(100) NOT NULL,
healthLabels VARCHAR(100) NOT NULL,
ingredientsLines VARCHAR(1000) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Turkey Meatballs","https://www.edamam.com/web-img/93c/93c604fef9935bdcad58ab25f44830ab.jpg", "Sulfites", "Low-Carb", 
"Sugar-Conscious, Peanut-Free, Tree-Nut-Free, Alcohol-Free", 
"1 Tbsp butter, 1 large shallot, minced (about 1 Tbsp), 
1 clove garlic, minced (about 1 teaspoon), 
6 ounces of mushrooms (a mix of shiitake and cremini), 
finely chopped, 
1 teaspoon herbes de Provence, 
1 pound ground turkey meat (we prefer thigh meat),
1 Tbsp chopped fresh parsley (plus more to sprinkle over when you serve),
1 teaspoon Dijon mustard,
1/2 teaspoon balsamic vinegar,
1/4 teaspoon lemon zest (optional, if you have it use it),
1 Tbsp mayonnaise,
1 teaspoon Kosher salt,
1/2 teaspoon ground black pepper,
1 Tbsp olive oil,
1 Tbsp olive oil,
1/4 cup minced onion,
2 cloves garlic minced (2 teaspoons),
1-28 ounce can whole peeled tomatoes,
Salt and pepper to taste");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Margarita Pizza", "https://www.edamam.com/web-img/4e3/4e34d5c43723aa370698716e01beb329", "Sulfites", "NA", 
"1 package of pizza dough mix, or your favorite pizza dough recipe,
4 vine rippened tomatoes,
1 clove garlic, chopped (optional),
3 tablespoons chopped fresh oregano,
2 tablespoons olive oil,
ground black pepper,
salt,
1/2 pound buffalo mozzarella, torn into chunks,
a handful of fresh basil leaves");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Margarita Pizza", "https://www.edamam.com/web-img/4e3/4e34d5c43723aa370698716e01beb329", "Sulfites", "NA", 
"1 package of pizza dough mix, or your favorite pizza dough recipe,
4 vine rippened tomatoes,
1 clove garlic, chopped (optional),
3 tablespoons chopped fresh oregano,
2 tablespoons olive oil,
ground black pepper,
salt,
1/2 pound buffalo mozzarella, torn into chunks,
a handful of fresh basil leaves");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Fettuccine Alfredo", "https://www.edamam.com/web-img/b54/b5423d756ab23b0eb8c2a9d3ae0ae7ae.jpg", "Sulfites", "NA", 
"4 cups heavy cream,
Kosher salt, to taste,
1 lb. dried fettuccine,
1½ cups finely grated parmesan, plus more for serving,
3 tbsp. unsalted butter,
Freshly ground black pepper, to taste,
Finely chopped parsley, for serving");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Grilled Steak", "https://www.edamam.com/web-img/ec5/ec5b5a864df655b2bb9fea6630970fae.jpg", "NA", "Low-Carb",
"Sugar-Conscious, Peanut-Free, Tree-Nut-Free, Alcohol-Free", 
"1 porterhouse, 
flank, or rib-eye steak, 
1 3/4 pounds and 1 1/2 inch thick,
Coarse salt and ground pepper");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Marinated Lamb Chops", "https://www.edamam.com/web-img/e2e/e2e2cd677902f3554b426190c917635d.jpg", "NA", "Low-Carb",
"Sugar-Conscious, Peanut-Free, Tree-Nut-Free, Alcohol-Free", 
"1/4 cup olive oil,
1 tablespoon balsamic vinegar,
4 garlic cloves, minced,
8 frenched 1-inch-thick rib lamb chops (about 1 pound total)");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("The Perfect Hamburger", "https://www.edamam.com/web-img/314/314e6bee3bcb75e5e896f1f80ff3b313.jpg", "Sulfites", "NA",
"Sugar-Conscious, Peanut-Free, Tree-Nut-Free, Alcohol-Free",
"1 lb. ground chuck or ground lean beef,
2 Tbs. finely chopped yellow onion,
1 tsp. minced garlic,
1 tsp. salt,
1/2 tsp. freshly ground pepper,
1 or 2 dashes of Worcestershire sauce,
4 slices cheddar or Swiss cheese (optional),
4 hamburger buns, split,
Sliced tomato for serving,
Sliced sweet white onion, such as Maui, Vidalia _x000d_\n  or Walla Walla, for serving,
Torn lettuce for serving,
Sliced dill pickle for serving,
Ketchup, mayonnaise, mustard or other _x000d_\n  condiments of your choice for serving");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Orange Chicken", "https://www.edamam.com/web-img/92d/92dfbc25d084a0a57aa41e15a125c23f.jpg", "Gluten, Wheat, Sulfites", "Low-Carb",
"Peanut-Free, Tree-Nut-Free",
"3 tablespoons soy sauce, divided,
2 tablespoons white wine,
2 teaspoons minced ginger,
1 clove of garlic, minced,
4 boneless, skinless chicken breasts, cut into 1 to 1 1/2-inch cubes,
1/4 cup plus 1 tablespoon cornstarch (or potato starch), divided,
canola (or other neutral oil) oil, for frying,
1 tablespoon honey,
2/3 cup orange juice,
1 tablespoon orange marmalade,
1 tablespoon rice vinegar,
1/4 teaspoon sesame oil");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Steak Tacos with Guacamole", "https://www.edamam.com/web-img/b4a/b4a9e17ad70c30d3ef21265f78604a4e.jpg", "Eggs, Milk, Sulfites", "Balanced",
"12 corn tortillas,
1/2 grilled flank steak,
2 avocados, halved, pitted and peeled,
1 cup fresh tomato salsa,
Juice of 1 lime,
Salt and freshly ground pepper, to taste,
1/2 small romaine lettuce head, thinly shredded (about 2 cups)");

INSERT INTO recipes (recipe_name, image, cautions, dietLabels, healthLabels, ingredientsLines)
VALUES ("Killer Club Sandwich", "https://www.edamam.com/web-img/819/819a2e1f768e5892330b4a479fcaad5a.jpg", "Sulfites, FODMAP", "Low-Carb",
"12 slices Sandwich Bread,
4 tbsp Mayonnaise,
1 tbsp Prepared Basil Pesto,
1 tbsp Prepared Sundried Tomato Pesto (or Just A Couple Of Pureed Sundried Tomatoes),
8 slices Bacon, Cut In Half,
1/2 lb Shaved Ham,
1/2 lb Shaved Turkey,
4 whole Avocados, Peeled And Sliced,
4 slices Cheese (swiss, Mozzarella, Etc.),
Romaine Or Green Leaf Lettuce");