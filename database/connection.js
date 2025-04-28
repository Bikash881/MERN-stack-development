
//sequelize lai import gareko
const {Sequelize,DataTypes} = require ("sequelize")
// cladd Sequalize ko object banayera supabase ko link rakheko
const sequelize =new Sequelize("postgresql://postgres.eeaqgamnxrggctabqbzc:welcome to fulllstack development@aws-0-us-east-2.pooler.supabase.com:6543/postgres")


//connect vayo ki vayena vanera check gareko
sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
    console.log("Error aayo" + err)
})


const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db