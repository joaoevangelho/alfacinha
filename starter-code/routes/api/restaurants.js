'use strict';

const { Router } = require('express');
const router = new Router();
// const paginate = require('jw-paginate');
const routeGuard = require('./../../middleware/route-guard');

router.get('/restaurant-list', routeGuard, (req, res, next) => {
  const items = [...Array(150).keys()].map(i => ({
    id: i + 1,
    name: 'Item ' + (i + 1)
  }));

  // get page from query params or default to first page
  const pager = parseInt(req.query.page) || 1;

  // get pager object for specified page
  // const pager = paginate(items.length, page);

  // get page of items from items array
  const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

  // return pager object and current page of items
  return res.json({
    pager,
    pageOfItems
  });
});

module.exports = router;
