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

let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("delete from users where id=?", [userId]);
  return res.redirect("/");
};

let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute("select * from users where id =?", [id]);
  return res.render("update.ejs", { dataUser: user[0] });
};

// return res.send(`${req.params.id}`);

let postUpdateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    "update users set firstName=?, lastName=?, email=?, address=? where id= ?",
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

module.exports = {
  getHompage,
  getDetailPage,
  getNewUser,
  deleteUser,
  getEditPage,
  postUpdateUser,
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
