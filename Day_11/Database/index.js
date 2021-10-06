const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    "postgres", //db name
    "postgres", //user name
    "12345", //password
    {
        host:"locahost",
        dialect: "postgres",  //supose if we want to change the dialect to mysql, we can do it here
    }

)

sequelize.sync();

(async () =>{
    try{
        await sequelize.authenticate();
        console.log("connection established with db")
    } catch(err) {
        console.error("unable to connect to db")
    }
    
})();

module.exports = sequelize;