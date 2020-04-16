const express = require("express");
const userDB = require("./userDb");

const router = express.Router();

router.post("/", (req, res) => {
  userDB
    .insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console("Error", err);
      res.status(500).json({ errorMessage: "Error adding user" });
    });
});

router.post("/:id/posts", (req, res) => {});

router.get("/", (req, res) => {
  userDB
    .get()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({ errorMessage: "Error retrieving users" });
    });
});

router.get("/:id", (req, res) => {
  userDB
    .getById(req.params.id)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({ errorMessage: "Error retrieving user" });
    });
});

router.get("/:id/posts", (req, res) => {
  userDB
    .getUserPosts(req.params.id)
    .then((posts) => {
      res.status(201).json(posts);
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({ errorMessage: "Error retrieving posts" });
    });
});

router.delete("/:id", (req, res) => {
  userDB
    .remove(req.params.id)
    .then(() => {
      res.status(201).json({ message: "User removed!" });
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({ message: "Error removing user" });
    });
});

router.put("/:id", (req, res) => {
  userDB
    .update(req.params.id, req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({ message: "Error updating user" });
    });
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
