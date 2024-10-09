require('dotenv').config();

const { 
  POSTGRES_HOST, 
  POSTGRES_USER, 
  POSTGRES_PASSWORD, 
  POSTGRES_DATABASE, 
  POSTGRES_PORT 
} = process.env;

module.exports = {
  "development": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": POSTGRES_DATABASE,
    "host": POSTGRES_HOST,
    "dialect": "postgres",
    "port": POSTGRES_PORT,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "test": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": POSTGRES_DATABASE,
    "host": POSTGRES_HOST,
    "dialect": "postgres",
    "port": POSTGRES_PORT,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "production": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": POSTGRES_DATABASE,
    "host": POSTGRES_HOST,
    "dialect": "postgres",
    "port": POSTGRES_PORT,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}