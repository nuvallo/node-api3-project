const express = require("express");
const usersDB = require("./userDb");
const postsDB = require("../posts/postDb");
const router = express.Router();

router.post("/", validateUser(), (req, res) => {
  usersDB
    .insert(req.body)
    .then((new_user) => res.json(new_user))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: "Error adding new user" });
    });
});

router.post("/:id/posts", validateUserId(), validatePost(), (req, res) => {
  postsDB
    .insert(req.text)
    .then((new_post) => res.json(new_post))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ errorMessage: "Error creating post" });
    });
});

router.get("/", (req, res) => {
  usersDB
    .get()
    .then((users) => res.json(users))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: "Error retrieving users" });
    });
});

router.get("/:id", validateUserId(), (req, res) => {
  const { id } = req.params;
  usersDB
    .getById(id)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log("Error: ", err);
      res
        .status(404)
        .json({ errorMessage: "Error retriving user with this ID" });
    });
});

router.delete("/:id", validateUserId(), (req, res) => {
  const { id } = req.params;
  usersDB
    .remove(id)
    .then(() => {
      res.status(200).json({ errorMessage: `User has been deleted` });
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: `Error removing this user` });
    });
});

router.put("/:id", validateUser(), validateUserId(), (req, res) => {
  const { id } = req.params;
  usersDB
    .update(id, req.user)
    .then((updated_user) => res.json(updated_user))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: `Error updating this user` });
    });
});

//custom middleware

function validateUserId() {
  return (req, res, next) => {
    const { id } = req.params;
    usersDB
      .getById(id)
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(400).json({ errorMessage: "User doesn't exists" });
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ message: "Error getting user with this ID" });
      });
  };
}

function validateUser() {
  return (req, res, next) => {
    resource = {
      name: req.body.name,
    };

    if (!req.body.name) {
      return res.status(404).json({ errorMessage: "Missing user data" });
    } else {
      req.user = resource;
      next();
    }
  };
}

function validatePost() {
  return (req, res, next) => {
    resource = {
      text: req.body.text,
      user_id: req.params.id,
    };

    if (!req.body.text) {
      return res.status(404).json({ errorMessage: "Missing post data" });
    } else {
      req.text = resource;
      next();
    }
  };
}

module.exports = router;
