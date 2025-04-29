
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

module.exports = db