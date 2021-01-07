module.exports = {
  port: process.env.PORT,
  db: {
    url: process.env.DATABASE_URL
  },
  secret: process.env.SECRET
}
