const express = require("express");
const db = require("./userDb");

const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  db.get()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Error retrieving users" });
    });
});

router.get("/:id", (req, res) => {
  db.getById(req.params.id)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({ errorMessage: "Error retrieving user" });
    });
});

router.get("/:id/posts", (req, res) => {
  db.getUserPosts(req.params.id)
    .then((posts) => {
      res.status(201).json(posts);
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({ errorMessage: "Error retrieving user posts" });
    });
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
