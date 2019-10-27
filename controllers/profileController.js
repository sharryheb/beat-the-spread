const db = require('../models');
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = {
  profile: (req, res, next) => {
    // const token = req.headers.authorization || req.headers.Authorization;
    // const decodedToken = jwt.verify(token, jwtSecret);
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    const decodedToken = jwt.verify(token, jwtSecret);
    res.send(decodedToken);
    
  }
};