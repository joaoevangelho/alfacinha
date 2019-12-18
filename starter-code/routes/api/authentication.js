"use strict";

const { Router } = require("express");
const router = new Router();
const bcryptjs = require("bcryptjs");
const User = require("./../../models/user");
const uploader = require("./../../middleware/multer-configuration");

router.post("/join", uploader.single("image"), async (req, res, next) => {
  const { username, name, email, password, aboutMe } = req.body;
  // console.log(`this should show req.file(route)`, req.file);
  try {
    /*  const imageFile = await Image.create(req.file); */
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      username,
      name,
      email,
      passwordHash: hash,
      image: req.file.url,
      aboutMe
    });
    req.session.user = user._id;
    res.json({
      user,
      message: "user successfully created"
    });
  } catch (error) {
    console.log("JOIN ERROR", error);
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  // console.log('AQUI bodyyy', req.body);
  try {
    const user = await User.findOne({
      username
    }).exec();
    // console.log('USEEER', user);
    if (!user) throw new Error("There's no user with that username.");
    const result = await bcryptjs.compare(password, user.passwordHash);
    if (!result) throw new Error("Wrong password.");
    req.session.user = user._id;
    res.json({
      user,
      message: "user successfully signed in"
    });
  } catch (error) {
    console.log("LOGIN ERROR", error);
    next(error);
  }
});

// const routeGuard = require('./../../middleware/route-guard');

router.get("/loggedin", async (req, res, next) => {
  const userId = req.session.user;
  // console.log('oiiiiiiii');
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findById(userId).exec();
      if (!user) throw new Error("Signed in user not found");
      res.json({
        user,
        message: "user in session"
      });
    } catch (error) {
      next(error);
    }
  }
});

router.post("/logout", (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get("/add-to-favorites/:restaurantId", async (req, res, next) => {
  const userId = req.session.user;
  console.log("AQUIIII", req.params.restaurantId);
  const restaurantId = req.params.restaurantId;
  // console.log("IS THERE A USER HERE", userId);
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findByIdAndUpdate(userId, {
        $push: { favorites: restaurantId }
      }).exec();
      if (!user) throw new Error("there's no user logged in");
      res.json({
        user,
        message: "there's a user logged in"
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
});

module.exports = router;
