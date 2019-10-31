module.exports = {
  logOut: (req, res) => {
    req.logOut();
    res.redirect('/');
  }
};