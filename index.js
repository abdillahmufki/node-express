const express = require("express");
const userRouter = require("./router/users");
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  const kelas = {
    id: 1,
    nama: "Javascipt",
  };
  res.json(kelas);
});

app.get("/about", (req, res) => {
  res.redirect("https://expressjs.com/");
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
