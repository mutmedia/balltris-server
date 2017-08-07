module.exports = {
  port: process.env.PORT,
  db: {
    url: process.env.MONGODB_URI,
  },
  secret: process.env.SECRET
};
