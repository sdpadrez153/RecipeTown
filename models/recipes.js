module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipe_name: DataTypes.STRING,
    image: DataTypes.BLOB,
    cautions: DataTypes.STRING,
    dietLabels: DataTypes.STRING,
    healthLabels: DataTypes.STRING,
    ingredientsLines: DataTypes.STRING
  },{
    timestamps: false
  });
  return Recipes;
};
