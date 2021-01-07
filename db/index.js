const MongoClient = require('mongodb').MongoClient
const config = require('config')
const Model = require('./model')
const uri = config.db.url

let db

class Db {
  async connect () {
    if (!db) {
      db = new MongoClient(uri, { useNewUrlParser: true })
      this.User = new Model(db, 'users')
      this.Game = new Model(db, 'games')
      db.createIndex('games', { userid: 1, game: 1 }, { unique: true })
    }
  }
};

module.exports = new Db()
