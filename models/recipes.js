module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipe_name: DataTypes.STRING,
    image: DataTypes.BLOB,
    cautions: DataTypes.STRING,
    dietLabels: DataTypes.STRING,
    healthLabels: DataTypes.STRING,
    ingredientsLines: DataTypes.STRING
<<<<<<< HEAD
=======

>>>>>>> c5ef7f11762bddb2342b2a9d07dd42f735a59746
  },{
    timestamps: false
  });
  return Recipes;
};
