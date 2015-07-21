
module.exports = function(req, res, next) {

  if (req.session.curr_user) {
    return next();
  } else{
    res.redirect("/index");
  }
};
