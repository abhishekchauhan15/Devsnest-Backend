const { Sequilize, Sequelize} = require("sequelize")

const sequelize = new Sequelize(
    "postgres", //db name
    "postgres", //user name
    "12345", //password
    {
        host:"locahost",
        dialect: "postgres",
    }

)

Sequilize.sync();

(async () =>{
    try{
        await sequelize.authenticate();
        console.log("connection established with db")
    } catch(err) {
        console.error("unable to connect to db")
    }
    
})();

module.exports = sequelize;