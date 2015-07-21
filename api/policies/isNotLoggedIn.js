
module.exports = function(req, res, next) {

  if (req.session.curr_user) {

    if(req.session.curr_user == 'admin'){
      res.redirect('/admin');
    }
    else{
      res.redirect('/users/' + req.session.curr_user)
    }
  } else{
    return next();
  }

};
