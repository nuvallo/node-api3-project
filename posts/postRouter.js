const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  posts
    .get()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error: ", err);
      res.status(404).json({ message: "Error retrieving posts" });
    });
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
