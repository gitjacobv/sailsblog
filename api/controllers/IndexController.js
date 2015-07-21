/**
 * IndexController
 *
 * @description :: Server-side logic for managing index
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function (req, res) {
    res.view('index');
  },

  login: function(req, res){

    if(req.body.username && req.body.password){

      User.findOne({
        username: req.body.username,
        password: req.body.password
      } , function ( err, user ){
        if(user){

          req.session.curr_user = user.username;
          req.flash('status', 'Successfully Logged In');

          if(user.username == 'admin'){
            res.redirect('/admin');
          }

          else{
            res.redirect('/users/'+user.username);
          }

        }
        else{
          req.flash('status', 'Login Failed');
          res.redirect('/index');
        }

      });

    } else{
      req.flash('status', 'Incomplete credentials');
      res.redirect('/index');
    }
  },

  signup: function(req, res){

    //check if a field is empty
    for(entry in req.body){
      if(req.body[entry] == ''){
        req.flash('status', 'Fields must not be empty');
        res.redirect('/index');
        return;
      }
    }

    //check if matching password
    if(req.body.password != req.body.confirm_password){
      req.flash('status', 'Password does not match');
      res.redirect('/index');
      return;
    }

    //check if username is already existing
    User.findOne( {username: req.body.username}, function ( err, finduser ){
      if(finduser){
        req.flash('status', 'User already exist');
        res.redirect('/index');
      } else{
          User.create({
            username  : req.body.username,
            password  : req.body.password,
            firstname : req.body.firstname,
            middlename: req.body.middlename,
            lastname  : req.body.lastname
          },function (err, result) {
              req.flash('status', 'Successfully Signed Up');
              res.redirect('/index');
            });
        }
    });
  },

  logout: function(req, res){

    delete req.session.curr_user;
    req.flash('status', 'Successfully Logged Out');

    res.redirect('/index');
  }

};
