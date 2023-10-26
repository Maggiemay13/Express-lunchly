/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql:///lunchly");

// let db = new Client({
//     host: "/var/run/postgresql/",
//     database: "biztime",
//   });

db.connect();

module.exports = db;
