var gulp = require('gulp');
var minify = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  css:'../static/css/*.css',
  pack:'../static/pack/',
  js:'../static/js',
  scripts:[
    '../static/js/jquery.easing.1.3.js',
    '../static/js/touchTouch.jquery.js',
    '../static/js/fruithouse.js',
    '../static/js/superfish.js'
  ],
};

gulp.task('css', function () {
  gulp.src(paths.css)
    .pipe(minify())
    .pipe(gulp.dest(paths.pack));
});

gulp.task('js', function () {
   gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest(paths.pack));
});


// 监听任务，指定路径的文件变化后触发
gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.js, ['js']);
});

// 默认任务（运行gulp以后触发）
gulp.task('default', ['css','js','watch']);
