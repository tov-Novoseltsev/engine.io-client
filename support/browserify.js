
/**
 * Module dependencies.
 */

var browserify = require('browserify');
var path = require.resolve('../');

/**
 * Module exports.
 */

module.exports = build;

/**
 * Make the build.
 *
 * @api public
 */


function build(fn){
  var opts = {};
  opts.builtins = false;
  opts.standalone = 'eio';
  opts.insertGlobals = 'global';
  browserify(path).bundle(opts, fn);
}