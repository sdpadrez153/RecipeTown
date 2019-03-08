module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipe_name: DataTypes.STRING,
    image: DataTypes.BLOB,
    cautions: DataTypes.STRING,
    dietLabels: DataTypes.STRING,
    healthLabels: DataTypes.STRING,
    ingredientsLines: DataTypes.STRING
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> c5ef7f11762bddb2342b2a9d07dd42f735a59746
=======
>>>>>>> 524c516143ed5b744aceb6f288fc36266d454176
  },{
    timestamps: false
  });
  return Recipes;
};
