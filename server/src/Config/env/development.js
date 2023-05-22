class Config {
    constructor () {
      this.env = 'development'
      this.PORT = process.env.PORT || 3000
      this.API_BASE = '/api'
      this.DATABASE_HOST = 'localhost'
      this.DATABASE_PORT = process.env.DATABASE_PORT || 5432
      this.DATABASE = 'todolistdb'
      this.DATABASE_USERNAME = 'postgres'
      this.DATABASE_PASSWORD = 'elpsycongroo'
      this.CLIENT_URL = 'http://localhost:5500'
    }
  }
  
  module.exports = new Config()