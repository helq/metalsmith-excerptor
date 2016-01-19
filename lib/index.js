/**
 * Dependencies
 */
var debug = require('debug')('metalsmith-excerptor');
var truncate = require('html-truncate');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Settings
 *
 * Options supported by metalsmith-excerptor
 */
var settings = ['maxLength', 'keepImageTag', 'ellipsis'];

/**
 * Metalsmith plugin to manipulate paths of the files
 *
 * @param {Number or Object} options
 *   @property {Number}  maxLength
 *   @property {Boolean} keepImageTag (optional)
 *   @property {String}  ellipsis (optional)
 * @return {Function}
 */

function plugin(options){
  /**
   * Init
   */
  options = options || {};

  if (typeof options === 'number') {
    maxLength = options;
    options = {
        keepImageTag: true,
        ellipsis: ''
    }
  } else {
    maxLength =       options.maxLength    || 300;
    options = {
        keepImageTag: options.keepImageTag === false ? false : true,
        ellipsis:     options.ellipsis     || ''
    }
  }

  /**
   * Main plugin function
   */
  return function(files, metalsmith, done){
    Object.keys(files).forEach(function(file){
      var data = files[file];
      
      debug("creating excerpt for: %s", file);
      excerpt = truncate(data.contents.toString(), maxLength, options);

      data['excerpt'] = new Buffer(excerpt);
    });

    done();
  };
}
