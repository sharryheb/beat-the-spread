const router = require('express').Router();
const profileController = require('../../controllers/profileController');

router.get('/profile', (req, res, next) => {
  profileController.profile(req, res, next);
});

module.exports = router;