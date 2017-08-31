
const Sequelize = require('sequelize')

const sequelize = new Sequelize('runner-test', 'runnercamp', 'both%123', {
  host: '10.0.101.17',

  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
.authenticate()
.then(()=>{console.log("connection has been established successfully")})
.catch((error)=>{console.error("unable to connect to the db")})
