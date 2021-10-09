import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("select * from users");

  return res.status(200).json({
    data: rows,
  });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(404).json({
      message: "page not found",
    });
  }
  await pool.execute(
    "insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({ message: "ok" });
};

let updateUser = async (req, res) => {
  // return res.status(200).json({            // each time when write a new function
  //     message: 'ok'                        // should return this status to check
  // })                                       // in postman that this working or not
  let { firstName, lastName, email, address, id } = req.body;
  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(404).json({
      message: "missing data",
    });
  }
  await pool.execute(
    "update users set firstName = ?, lastName = ?, email = ?, address= ?, id = ?",
    [firstName, lastName, email, address, id]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let deleteUser = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(404).json({
      message: "page not found",
    });
  }

  await pool.execute("delete from users where id = ?", [userId]);
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
