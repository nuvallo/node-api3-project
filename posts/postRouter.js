const express = require("express");
const postsDB = require("./postDb");
const router = express.Router();

router.get("/", (req, res) => {
  postsDB
    .get()
    .then((posts) => res.json(posts))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: "Error retrieving posts" });
    });
});

router.get("/:id", validatePostId(), (req, res) => {
  const { id } = req.params;
  postsDB
    .getById(id)
    .then((post) => res.json(post))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: "Error retrieving this post" });
    });
});

router.delete("/:id", validatePostId(), (req, res) => {
  postsDB
    .remove(id)
    .then(() => {
      res.status(200).json({ message: `Post has been deleted` });
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: `Error deleting this post` });
    });
});

router.put("/:id", validatePostId(), validatePost(), (req, res) => {
  const { id } = req.params;
  postsDB
    .update(id, req.text)
    .then((updated_post) => res.json(updated_post))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ errorMessage: "Error updating post" });
    });
});

// custom middleware

function validatePost() {
  return (req, res, next) => {
    resource = {
      text: req.body.text,
    };

    if (!req.body.text) {
      return res.status(404).json({ errorMessage: `Missing post data ` });
    } else {
      req.text = resource;
      next();
    }
  };
}

function validatePostId() {
  return (req, res, next) => {
    posts
      .getById(req.params.id)
      .then((post) => {
        if (post) {
          req.post = post;
          next();
        } else {
          res.status(400).json({ errorMessage: `Post not found` });
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ errorMessage: "Error retrieving post" });
      });
  };
}

module.exports = router;
