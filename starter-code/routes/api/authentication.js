'use strict';

const { Router } = require('express');
const router = new Router();

const User = require('./../../models/user');
const bcryptjs = require('bcryptjs');

router.post('/join', async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      name,
      email,
      passwordHash: hash
    });
    req.session.user = user._id;
    res.json({ user, message: "user successfully created" });
    res.redirect('/');
  } catch (error) {
    console.log('JOIN', error);
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) throw new Error("There's no user with that email.");
    const result = await bcryptjs.compare(password, user.passwordHash);
    if (!result) throw new Error('Wrong password.');
    req.session.user = user._id;
    res.json({ user, message: "user successfully signed in" });
    res.redirect('/');
  } catch (error) {
    console.log('LOGIN', error);

    next(error);
  }
});

router.get("/loggedin", async (req, res, next) => {
  const userId = req.session.user;
  console.log("oiiiiiiii");
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findById(userId).exec();
      if (!user) throw new Error("Signed in user not found");
      res.json({ user, message: "user in session" });
    } catch (error) {
      next(error);
    }
  }
});

router.post('/logout', (req, res, next) => {
  req.session.destroy();
  // res.redirect('/');
  res.json({});
});

module.exports = router;
