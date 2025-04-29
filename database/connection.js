
//sequelize lai import gareko
const {Sequelize,DataTypes} = require ("sequelize")
// cladd Sequalize ko object banayera supabase ko link rakheko
const sequelize =new Sequelize(process.env.cs)


//connect vayo ki vayena vanera check gareko
sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
    console.log("Error aayo" + err)
})

//connection to db
const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.books =  require("./models/bookModel")(sequelize,DataTypes)
db.users = require("./models/user.Model")(sequelize,DataTypes)
db.products = require("./models/product.model")(sequelize,DataTypes)

// migrate code ho yo chai hai 
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai tw 🚀")
})

// const db  = {}
// db.Sequelize = Sequelize 
// db.sequelize = sequelize
module.exports = db

// module.exports = db
//testtt
