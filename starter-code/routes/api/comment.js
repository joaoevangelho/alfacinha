'use strict';

const { Router } = require('express');
const router = new Router();
// const paginate = require('jw-paginate');
// const routeGuard = require('./../../middleware/route-guard');
const Comments = require('./../../models/comments');
const uploader = require('./../../middleware/multer-configuration');

//comentários nas páginas dos restaurantes
router.post('/create', uploader.single('image'), async (req, res, next) => {
  const text = req.body.text;
  const restaurant = req.body.restaurant;
  try {
    const newComment = await Comments.create({
      restaurant,
      text,
      user: req.session.user,
      image: req.file && req.file.url || ''
    });
    console.log('should be newComment in restaurant js', newComment);
    res.json({ newComment });
  } catch (error) {
    next(error);
  }
});

router.get('/list/:id', async (req, res, next) => {
  try {
    console.log(req.params.id);
    const comments = await Comments.find({
      restaurant: req.params.id
    })
      .populate('user')
      .exec();
    console.log(comments);
    res.json({ comments });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
