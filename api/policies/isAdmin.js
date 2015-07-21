
module.exports = function(req, res, next) {

  if(req.session.curr_user == 'admin'){
      return next();
  }
  else{
    res.forbidden('Only admin allowed.');
  }
};
