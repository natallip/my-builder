'use strict';

module.exports = function() {
$.gulp.task('sprite:png', function (cb) {
  var spriteData = $.gulp.src('./source/sprite/*.{png,gif}')
  .pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img'));
  spriteData.css.pipe($.gulp.dest($.config.root + '/assets/css'));

  cb();
})
};