'use strict';

const { Router } = require('express');
const router = new Router();
const User = require("./../../models/user");
const Restaurants = require("./../../models/Restaurants");

router.get("/add-to-favorites/:restaurantId", async (req, res, next) => {
  const userId = req.session.user;
  console.log("AQUIIII", req.params.restaurantId);
  const restaurantId = req.params.restaurantId;
  // console.log("IS THERE A USER HERE", userId);
  if (!userId) {
    res.json({});
  } else {
    try {
      const restaurantData = await Restaurants.findById(restaurantId).exec();
      const user = await User.findByIdAndUpdate(userId, {
        $push: { favorites: restaurantData }
        // $push: { favorites: restaurantId }
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
/* 
router.get("/loggedin", async (req, res, next) => {
  const restaurantId = req.session.restaurant;
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
}); */

module.exports = router;
