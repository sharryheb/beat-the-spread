let config = {
  development: {
      username: process.env.CONFIG_USERNAME,
      password: process.env.CONFIG_PASSWORD,
      database: process.env.CONFIG_DB,
      host: "localhost",
      dialect: "mysql"
  },
  test: {
      username: process.env.CONFIG_USERNAME,
      password: process.env.CONFIG_PASSWORD,
      database: process.env.CONFIG_DB,
      host: "localhost",
      dialect: "mysql",
      logging: false
  },
  production: {
      useEnvVariable: "JAWSDB_URL",
      dialect: "mysql"
  }
};

module.exports = config;

// {
//   "development": {
//     "username": "root",
//     "password": "password",
//     "database": "beat_the_spread",
//     "host": "127.0.0.1",
//     "port": 3306,
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }