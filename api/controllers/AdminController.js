/**
 * AdminController
 *
 * @description :: Server-side logic for managing admin
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function (req, res) {
    User.findOne({
      username: 'admin'
    } , function ( err, user ){
      if(err) throw err;
      res.view('admin/home', {user: user});
    });
  },

  user_list: function(req, res){
    User.find( function ( err, users, count ){
      res.view( 'admin/user_list', {
        users : users
      });
    });
  },

  user_new: function(req, res){
    res.view('admin/user_new');
  },

  user_create: function(req, res){

    //check if a field is empty
    for(entry in req.body){
      if(req.body[entry] == ''){
        req.flash('status', 'Fields must not be empty');
        res.redirect('/admin/users/new');
        return;
      }
    }

    //check if matching password
    if(req.body.password != req.body.confirm_password){
      req.flash('status', 'Password does not match');
      res.redirect('/admin/users/new');
      return;
    }

    //check if username is already existing
    User.findOne( {username: req.body.username}, function ( err, finduser ){
      if(finduser){
        req.flash('status', 'User already exist');
        res.redirect('/admin/users/new');
      } else{
          User.create({
            username  : req.body.username,
            password  : req.body.password,
            firstname : req.body.firstname,
            middlename: req.body.middlename,
            lastname  : req.body.lastname
          },function (err, result) {
              req.flash('status', 'Successfully Signed Up');
              res.redirect('/admin/users');
            });
        }
    });
  },

  user_edit: function(req, res){
    User.findOne( { username: req.param('uname') }, function ( err, user ){
      res.view( 'admin/user_edit', {user: user});
    });
  },

  user_update: function(req, res){

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
        res.redirect('/admin/users')
      });

    } else {
      req.flash('status', 'Password does not match.');
      res.redirect('/admin/users/'+req.param('uname')+'/edit');
    }

  },

  user_delete: function(req, res){
    User.destroy({username:req.param('uname')}).exec(function (err){
      if (err) throw err;
        req.flash('status', 'User successfully deleted')
        res.redirect( '/admin/users' );
    });
  },

  post_list: function(req, res){
    Post.find( function ( err, posts, count ){
      res.view( 'admin/post_list', {
        posts : posts
      });
    });
  },

  post_new: function(req, res){
    res.view('admin/post_new');
  },

  post_create: function(req,res){
    //check if a field is empty
    for(entry in req.body){
      if(req.body[entry] == ''){
        req.flash('status', 'Fields must not be empty');
        res.redirect('/admin/posts/new');
        return;
      }
    }

    Post.create({
      author    : 'admin',
      title     : req.body.title,
      content   : req.body.content,
    },function (err, result) {
        req.flash('status', 'Post successfully created');
        res.redirect('/admin/posts');
    });

  },

  post_edit: function(req, res){
    Post.findOne( { id: req.param('pid') }, function ( err, post ){
      res.view( 'admin/post_edit', {post: post});
    });
  },

  post_update: function(req, res){
    Post.update(
      {id:req.param('pid')},
      {title   : req.body.title,
       content : req.body.content}
    ).exec(function afterwards(err, updated){
      if (err) throw err;
      req.flash('status', 'Successfully edited post');
      res.redirect('/admin/posts');
    });
  },

  post_delete: function(req, res){
    Post.destroy({id:req.param('pid')}).exec(function (err){
      if (err) throw err;
      req.flash('status', 'Post successfully deleted');
      res.redirect( '/admin/posts' );
    });
  },

};
