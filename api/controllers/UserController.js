/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `UserController.index()`
   */
  index: function (req, res) {
		return res.json({
			todo: 'show() is not implemented yet!'
		});
  },

	create: function(req, res){
		User.create({username: "sample"}, function (err, result) {
			console.log(err, result);
			return res.json(result);
		});
	},

  /**
   * `UserController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `UserController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};
