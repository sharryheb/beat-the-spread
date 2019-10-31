const router = require('express').Router();
const logoutController = require('../../controllers/logoutController');

router.get('/sign-out', (req, res) => {
  logoutController.logOut(req, res);
});

module.exports = router;