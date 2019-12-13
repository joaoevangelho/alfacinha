'use strict';

const {
  Router
} = require('express');
const router = new Router();
const routeGuard = require('./../../middleware/route-guard');

router.get('/restaurant-list', routeGuard, (req, res, next) => {
  res.render('restaurant-list');
});

router.get('/restaurant-list/2', routeGuard, (req, res, next) => {
  res.render('restaurant-list/2');
});

module.exports = router;