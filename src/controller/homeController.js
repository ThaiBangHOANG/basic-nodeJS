import pool from "../configs/connectDB";

let getHompage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * from users");
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
  return res.send(JSON.stringify(user));
};

let getNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );

  return res.redirect("/");
};

module.exports = {
  getHompage,
  getDetailPage,
  getNewUser,
};

// import connection from "../configs/connectDB";

// let getHompage = (req, res) => {
//   let data = [];
//   connection.query("SELECT * FROM `users` ", function (err, results, fields) {
//     results.map((row) => {
//       data.push({
//         id: row.id,
//         email: row.email,
//         address: row.address,
//         firstName: row.firstName,
//         lastName: row.lastName,
//       });
//     });
//     return res.render("index.ejs", { dataUser: data });
//   });
// };

// module.exports = {
//   getHompage,
// };

// use async/await ::::::::::::::::: use creation Pool
