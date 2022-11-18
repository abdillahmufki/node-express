const express = require("express");
const router = express.Router();

let users = [
  {
    id: 1,
    name: "Mufki",
    email: "mufki@gmail.com",
  },
  {
    id: 2,
    name: "Asep",
    email: "Asep@gmail.com",
  },
];

router
  .route("/users")
  .get((req, res) => {
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: "Data user Masih Kosong!",
      });
    }
  })
  .post((req, res) => {
    users.push(req.body);
    res.send({
      status: true,
      data: users,
      message: "Data user berhasil di simpan",
      method: req.method,
      url: req.url,
    });
  });

router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  users.filter((user) => {
    if (user.id == id) {
      user.id = id;
      user.name = req.body.name;
      user.email = req.body.email;

      return user;
    }
  });
  res.json({
    status: true,
    data: users,
    message: "Data user berhasil di edit",
    method: req.method,
    url: req.url,
  });
});

router.delete("/users/:userId", (req, res) => {
  let id = req.params.userId;
  users = users.filter((user) => user.id != id);

  res.send({
    status: true,
    data: users,
    message: "Data user berhasil di hapus",
    method: req.method,
    url: req.url,
  });
});

module.exports = router;
