'use strict';

const gulp          = require('gulp'),
      del           = require('del'),
      watch         = require('gulp-watch'),
      plumber       = require('gulp-plumber'),
      webpack       = require('gulp-webpack'),
      webpackConfig = require('./webpack.config.js'),
      postcss       = require('gulp-postcss'),
      atImport      = require('postcss-import'),
      easings       = require('postcss-easings'),
      vars          = require('postcss-simple-vars'),
      nested        = require('postcss-nested'),
      mixins        = require('postcss-mixins'),
      autoprefixer  = require('autoprefixer'),
      cssnano       = require('cssnano'),
      browser       = require('browser-sync'),
      runSequence   = require('run-sequence'),
      htmlmin       = require('gulp-htmlmin'),
      cssmin        = require('gulp-cssmin'),
      uglify        = require('gulp-uglify'),
      rename        = require('gulp-rename'),
      reload        = browser.reload;

const DIR = {
  SRC:    'src/',
  PUBLIC: 'public/',
  BUILD:  'dist/'
};

gulp.task('webpack', () => {
  return gulp
    .src(DIR.SRC + 'js/entry.js')
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(DIR.PUBLIC + 'js/'))
    .pipe(browser.reload({stream: true}));
});

gulp.task('postcss', () => {
  return gulp
    .src(DIR.SRC + 'css/entry.css')
    .pipe(plumber())
    .pipe(postcss([
      atImport(),
      easings(),
      vars(),
      nested(),
      mixins(),
      autoprefixer({
        browsers: ['last 2 versions', '> 2%']
      }),
      cssnano()
    ]))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(DIR.PUBLIC + 'css/'))
    .pipe(browser.reload({stream: true}));
});

gulp.task('server', () => {
  browser.init({
    server: {
      baseDir: DIR.PUBLIC,
    },
    port: 8080,
    notify: false,
    open: 'external'
  });
});

gulp.task('build', () => {
  runSequence(
    'clean',
    'copy',
    'minifyHtml',
    'minifyJs'
  );
});

gulp.task('clean', () => {
  return del(DIR.BUILD);
});

gulp.task('copy', () => {
  return gulp
    .src(DIR.PUBLIC + '/**', {
      base: DIR.PUBLIC
    })
    .pipe(gulp.dest(DIR.BUILD));
});

gulp.task('minifyHtml', () => {
  return gulp
    .src(DIR.BUILD + '/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(DIR.BUILD));
});

gulp.task('minifyCss', () => {
  return gulp
    .src(DIR.BUILD + '/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest(DIR.BUILD));
});

gulp.task('minifyJs', () => {
  return gulp
    .src(DIR.BUILD + '/**/*.js')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(DIR.BUILD));
});

gulp.task('default', ['server', 'postcss', 'webpack'], () => {
  gulp.watch([DIR.SRC + 'css/**/*.css'], ['postcss']);
  gulp.watch([DIR.SRC + 'js/**/*.js'], ['webpack']);
  gulp.watch([DIR.PUBLIC + '/**/*.html'], reload);
});

