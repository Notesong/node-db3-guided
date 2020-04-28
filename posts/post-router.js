const express = require("express");

const postModel = require("./post-model");

const router = express.Router({
  mergeParams: true,
});

router.get("/", async (req, res, next) => {
  try {
    res.json(await postModel.findByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

// router.get("/", (req, res) => {
//   const { id } = req.params.id;

//   Users.findPosts(id)
//     .then((posts) => {
//       res.json(posts);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err });
//     });
// });

module.exports = router;
