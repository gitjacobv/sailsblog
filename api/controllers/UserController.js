/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function (req, res) {
    User.findOne({
      username: req.param('uname')
    } , function ( err, user ){
      if(err) throw err;
      res.view('user/home', {user: user});
    });
  },

  edit: function(req, res){
    User.findOne( { username: req.param('uname') }, function ( err, user ){
      res.view( 'user/edit', {user: user});
    });
  },

  update: function(req, res){

    if( req.body.password == req.body.confirm_password ){

      User.update(
        {username:req.param('uname')},
        {username   : req.body.username,
         password   : req.body.password,
         firstname  : req.body.firstname,
         middlename : req.body.middlename,
         lastname   : req.body.lastname}
      ).exec(function afterwards(err, updated){
        if (err) throw err;
        req.flash('status', 'Successfully edited user');
        res.redirect('/users/' + req.param('uname'));
      });

    } else {
      req.flash('status', 'Password does not match.');
      res.redirect('/users/'+req.param('uname')+'/edit');
    }

  }

};
