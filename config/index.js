require("dotenv").config();

const { MONGODB_URL, PORT } = process.env;
const MONGODB_URL_TEST = "mongodb://localhost:27017";

const config = {
  db: {
    mongo: MONGODB_URL || MONGODB_URL_TEST,
  },
  app: {
    port: PORT || 3000,
  },
};

module.exports = config;
