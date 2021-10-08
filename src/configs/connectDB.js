// import mysql from "mysql2/promise";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "nodejsbasic",
// });

// export default connection;

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

export default pool;
