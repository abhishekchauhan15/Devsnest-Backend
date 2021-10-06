const {DataTypes} = require('sequelize'); 
const sequilize = require('../Database'); 


//these are databse checks
const User = sequilize.define('User', {
    fullName :{
        type:DataTypes.STRING,
        allowNull:false
    },

    email:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports=User;