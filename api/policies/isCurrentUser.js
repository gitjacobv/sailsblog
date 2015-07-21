
module.exports = function(req, res, next) {

  if (req.session.curr_user) {
    if(req.session.curr_user == 'admin' ||req.session.curr_user == req.param('uname')){
      return next();
    }
  } else{
    res.forbidden('You shall not pass');
  }
};
