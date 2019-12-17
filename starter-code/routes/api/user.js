"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("./../../models/user");
// const uploader = require("./../../middleware/multer-configuration");

router.get('/:userId', async (req, res, next) => {
  // console.log('WHY ARE YOU UNDEFINED?', req.params);
  // console.log('WHY ARE YOU UNDEFINED?', req.body);
  console.log('WHY ARE YOU UNDEFINED?', req.session.user);
  const userId = req.session.user;
  try {
    const user = await User.findById(userId).exec();
    res.json({ user, message: 'user found' });
  } catch (error) {
    next(error);
  }
});

router.patch('/:userId', async (req, res, next) => {
  const { name, email, aboutMe, image } = req.body;
  const userId = req.session.user;
  console.log('ghfdubfjndvsmlvmd', userId);
  
  try {
    const user = await User.findByIdAndUpdate(userId, {
      ...(user && { user }),
      ...(name ? { name } : {}),
      ...(email ? { email } : {}),
      ...(aboutMe ? { aboutMe } : {}),
      ...(image ? { image } : {})
    }).exec();
    res.json({ user, message: "user successfully edited" });
  } catch (error) {
    next(error);
  }
});

router.delete('/:userId', async (req, res, next) => {
  const userId = req.session.user;
  try {
    await User.findByIdAndRemove(userId).exec();
    res.json({message: "user successfully DELETED"});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
