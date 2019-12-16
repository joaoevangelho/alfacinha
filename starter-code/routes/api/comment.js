'use strict';

const { Router } = require('express');
const router = new Router();
// const paginate = require('jw-paginate');
// const routeGuard = require('./../../middleware/route-guard');
const Comments = require('./../../models/comments');
const uploader = require('./../../middleware/multer-configuration');
const mongoose = require('mongoose');

//comentários nas páginas dos restaurantes
router.post('/create', uploader.single('image'), async (req, res, next) => {
  // console.log('BODY', req.body.text);
  // console.log('FILE', req.file);
  // console.log('PARAMS', req.body);

  const text = req.body.text;
  const restaurant = req.body.restaurant;
  try {
    const newComment = await Comments.create({
      restaurant,
      text,
      user: req.session.user,
      image: req.file.url
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

// router.post('/join', uploader.single('image'), async (req, res, next) => {
//   const { username, name, email, password } = req.body;
//   console.log(`this should show req.file(route)`, req.file);
//   try {
//     /*  const imageFile = await Image.create(req.file); */
//     const hash = await bcryptjs.hash(password, 10);l
//     const user = await User.create({
//       username,
//       name,
//       email,
//       passwordHash: hash,
//       image: req.file.url
//     });
//     req.session.user = user._id;
//     res.json({
//       user,
//       message: 'user successfully created'
//     });
//   } catch (error) {
//     console.log('JOIN ERROR', error);
//     next(error);
//   }
// });

module.exports = router;
