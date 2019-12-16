'use strict';

const { Router } = require('express');
const router = new Router();
// const paginate = require('jw-paginate');
const routeGuard = require('./../../middleware/route-guard');
const Comments = require('./../../models/comments');

//comentários nas páginas dos restaurantes
router.post('/create', async (req, res, next) => {
  console.log('should be req.body in restaurant js', req.body);
  console.log('should be req.file in restaurant js', req.file);

  try {
    const newComment = await Comments.create({
      //restaurant: req.params.id,
      user: req.session.id,
      text: req.body.text,
      image: req.file.url
    });
    console.log('should be newComment in restaurant js', newComment);
    res.json({ newComment });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
