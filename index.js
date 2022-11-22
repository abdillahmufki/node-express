const express = require("express");
const userRouter = require("./router/users");
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const myLogger = function (req, res, next) {
  req.time = new Date();
  next();
};

app.use(myLogger);

app.set("view engine", "ejs");
app.use("/assets", express.static("public"));
app.get("/", (req, res) => {
  const kelas = {
    id: 1,
    nama: "Javascipt",
    date: req.time.toString(),
  };
  res.render("pages/index", { kelas: kelas });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
