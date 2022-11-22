const { v4: uuidv4 } = require("uuid");

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

module.exports = {
  index: (req, res) => {
    res.render("pages/user/index", { users });
  },
  create: (req, res) => {
    res.render("pages/user/create");
  },
  store: (req, res) => {
    users.push({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    });
    res.send(users);
  },
  update: (req, res) => {
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
  },
  delete: (req, res) => {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);

    res.send({
      status: true,
      data: users,
      message: "Data user berhasil di hapus",
      method: req.method,
      url: req.url,
    });
  },
};
