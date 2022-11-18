const express = require("express");
const router = express.Router();

router
  .route("/users")
  .get((req, res) => {
    res.send("Get User");
  })
  .post((req, res) => {
    res.send("Post User");
  });

router.put("/users/:id", (req, res) => {
  const id = req.params;
  res.send(id);
});

router.delete("/users/:userId", (req, res) => {
  res.send(req.params);
});

module.exports = router;
