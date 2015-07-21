/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //INDEX

  '/': {
    view: 'homepage'
  },

  'GET /index': {
    controller: 'index',
    action: 'index'
  },

  'POST /login':{
    controller: 'index',
    action: 'login'
  },

  'POST /signup':{
    controller: 'index',
    action: 'signup'
  },

  'GET /logout':{
    controller: 'index',
    action: 'logout'
  },

  //ADMIN

  'GET /admin':{
    controller: 'admin',
    action: 'home'
  },

  'GET /admin/users':{
    controller: 'admin',
    action: 'user_list'
  },

  'GET /admin/users/new':{
    controller: 'admin',
    action: 'user_new'
  },

  'POST /admin/users/create':{
    controller: 'admin',
    action: 'user_create'
  },

  'GET /admin/users/:uname/edit':{
    controller: 'admin',
    action: 'user_edit'
  },

  'POST /admin/users/:uname/update':{
    controller: 'admin',
    action: 'user_update'
  },

  'GET /admin/users/:uname/delete':{
    controller: 'admin',
    action: 'user_delete'
  },

  'GET /admin/posts':{
    controller: 'admin',
    action: 'post_list'
  },

  'GET /admin/posts/new':{
    controller: 'admin',
    action: 'post_new'
  },

  'POST /admin/posts/create':{
    controller: 'admin',
    action: 'post_create'
  },

  'GET /admin/posts/:pid/edit':{
    controller: 'admin',
    action: 'post_edit'
  },

  'POST /admin/posts/:pid/update':{
    controller: 'admin',
    action: 'post_update'
  },

  'GET /admin/posts/:pid/delete':{
    controller: 'admin',
    action: 'post_delete'
  },

  //USER

  'GET /users/:uname': {
    controller: 'user',
    action: 'home'
  },

  'GET /users/:uname/edit': {
    controller: 'user',
    action: 'edit'
  },

  'POST /users/:uname/update': {
    controller: 'user',
    action: 'update'
  },

  //POST

  'GET /users/:uname/posts':{
    controller: 'post',
    action: 'home'
  },

  'GET /users/:uname/posts/new':{
    controller: 'post',
    action: 'new'
  },

  'POST /users/:uname/posts/create':{
    controller: 'post',
    action: 'create'
  },

  'GET /users/:uname/posts/:pid/edit':{
    controller: 'post',
    action: 'edit'
  },

  'POST /users/:uname/posts/:pid/update':{
    controller: 'post',
    action: 'update'
  },

  'GET /users/:uname/posts/:pid/delete':{
    controller: 'post',
    action: 'delete'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
