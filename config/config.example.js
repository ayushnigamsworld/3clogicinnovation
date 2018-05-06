// Copy this file as config.js in the same folder, with the proper database connection URI.
const DB_USERNAME = 'root';
const DB_PASSWORD = 'root';

module.exports = {
    db: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds111420.mlab.com:11420/3cinnovation`,
    db_dev: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds111420.mlab.com:11420/3cinnovation`
  };
