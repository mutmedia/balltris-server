const MongoClient = require('mongodb').MongoClient
const config = require('config')
const Model = require('./model')
const uri = config.get('db.url').toString()
console.log(uri)

class Db {
  async connect () {
    const client = new MongoClient(uri, { useNewUrlParser: true })
    client.connect(err => {
      if (err) {
        console.error(err)
        return
      }
      const db = client.db('balltris')
      this.User = new Model(db, 'users')
      this.Game = new Model(db, 'games')

      db.collection(this.Game.name).createIndex({ userid: 2, game: 1 }, { unique: true })
    })
  }
}

module.exports = new Db()
