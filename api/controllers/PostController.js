/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function(req, res){
    Post.find({author: req.param('uname')}, function ( err, posts, count ){
      res.view( 'post/home', {posts : posts});
    });
  },


  new: function(req, res){
    res.view('post/new');
  },

  create: function(req,res){
    //check if a field is empty
    for(entry in req.body){
      if(req.body[entry] == ''){
        req.flash('status', 'Fields must not be empty');
        res.redirect('/users/'+req.session.curr_user+'/posts/new');
        return;
      }
    }

    Post.create({
      author    : req.session.curr_user,
      title     : req.body.title,
      content   : req.body.content,
    },function (err, result) {
        req.flash('status', 'Post successfully created');
        res.redirect('/users/'+req.session.curr_user+'/posts');
    });

  },

  edit: function(req, res){
    Post.findOne( { id: req.param('pid') }, function ( err, post ){
      res.view( 'post/edit', {post: post});
    });
  },

  update: function(req, res){
    Post.update(
      {id:req.param('pid')},
      {title   : req.body.title,
       content : req.body.content}
    ).exec(function afterwards(err, updated){
      if (err) throw err;
      req.flash('status', 'Successfully edited post');
      res.redirect('/users/'+req.session.curr_user+'/posts');
    });
  },

  delete: function(req, res){
    Post.destroy({id:req.param('pid')}).exec(function (err){
      if (err) throw err;
      req.flash('status', 'Post successfully deleted');
      res.redirect('/users/'+req.session.curr_user+'/posts');
    });
  }

};
