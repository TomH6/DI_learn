const {Sequelize} = require ('sequelize')
const dotenv = require ('dotenv')

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL,{
  dialect:'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see new error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
  // logging:false
})

module.exports = db;