const MongoClient = require('mongodb').MongoClient
const config = require('config')
const Model = require('./model')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'test', '123456', {
  port: config.port,
  host: config.db.url,
  dialect: 'postgres'
})

sequelize.authenticate().then(() => {
  console.log('Success!')
}).catch((err) => {
  console.log(err)
})

class Db {
  async connect () {
    if (!db) {
      const db = new Client({
        connectionString: config.db.url,
        ssl: {
          rejectUnauthorized: false
        }
      })
      await db.connect()
      this.User = new Model(db, 'users')
      this.Game = new Model(db, 'games')
      db.createIndex('games', { userid: 1, game: 1 }, { unique: true })
    }
  }
};

module.exports = new Db()
