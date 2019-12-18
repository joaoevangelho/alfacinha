'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

// router.get('/user-profile', routeGuard, (req, res, next) => {
//   res.render('user-profile');
// });

router.get('/restaurant-list', routeGuard, (req, res, next) => {
  res.render('restaurant-list');
});

router.get('/show-list', routeGuard, (req, res, next) => {
  res.render('show-list');
});

router.get('/event-list', routeGuard, (req, res, next) => {
  res.render('event-list');
});

// router.get('/single-restaurant', routeGuard, (req, res, next) => {
//   res.render('restaurant-list');
// });

module.exports = router;
