const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const kelas = {
    id: 1,
    nama: "Mufki",
  };
  res.json(kelas);
});

app.get("/about", (req, res) => {
  res.redirect("https://expressjs.com/");
});

app.get("/users", (req, res) => {
  res.send("Get User");
});

app.post("/users", (req, res) => {
  res.send("Post User");
});

app.put("/users/:id", (req, res) => {
  const id = req.params;
  res.send(id);
});

app.delete("/users/:userId", (req, res) => {
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
