module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipe_name: DataTypes.STRING,
    image: DataTypes.LONGBLOB,
    cautions: DataTypes.STRING,
    dietLabels: DataTypes.STRING,
    healthLabels: DataTypes.STRING,
    ingredientsLines: DataTypes.STRING
  });
  return Recipes;
};
