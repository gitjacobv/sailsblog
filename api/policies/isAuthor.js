
module.exports = function(req, res, next) {

  Post.findOne( { id: req.param('pid') }, function ( err, post ){
    if(post.author == req.session.curr_user){
      next();
    }
    else{
      res.forbidden('Mind your own post!');
    }
  });
};
