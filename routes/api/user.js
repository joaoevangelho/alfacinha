"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("./../../models/user");
const uploader = require("./../../middleware/multer-configuration");

router.get("/user-profile/edit", async (req, res, next) => {
  // console.log('WHY ARE YOU UNDEFINED?', req.params);
  // console.log('WHY ARE YOU UNDEFINED?', req.body);
  // console.log("WHY ARE YOU UNDEFINED?", req.session.user);
  const userId = req.session.user;
  try {
    const user = await User.findById(userId).exec();
    res.json({ user, message: "user found" });
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/user-profile/edit",
  uploader.single("image"),
  async (req, res, next) => {
    const { name, email, aboutMe } = req.body;
    const data = {
      name,
      email,
      aboutMe
      // image: req.file && req.file.url || ''
    };
    if (req.file) data.image = req.file.url;
    const userId = req.session.user;
    console.log("~USER ID~", userId);
    console.log("~REQ BODYY~", req.body);
    console.log("~REQ FILE~", req.file);
    try {
      const user = await User.findByIdAndUpdate(userId, data).exec();
      // console.log(user);
      res.json({ user, message: "user successfully edited" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

router.delete("/user-profile/delete", async (req, res, next) => {
  const userId = req.session.user;
  try {
    await User.findByIdAndRemove(userId).exec();
    res.json({ message: "user successfully DELETED" });
  } catch (error) {
    console.log(error);

    next(error);
  }
});

module.exports = router;
