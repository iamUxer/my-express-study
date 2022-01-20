const express = require("express");
const { route } = require(".");
const router = express.Router();
const { Post, User } = require("../models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("posts main");
});

router.get("/me", function (req, res, next) {
  res.send("post for me");
});

//어싱크 안에서만 어웨잇을 사용할 수 있다.
//어싱크 함수가 리턴하는 값은 프로미스다
router.post("/post", async (req, res, next) => {
  const { content } = req.body;
  try {
    const data = await Post.create({
      content: content,
    });
    res.json({ result: true, content: content });
  } catch (err) {
    res.json({ result: false, err: err.message, content: content });
  }
});

module.exports = router;
