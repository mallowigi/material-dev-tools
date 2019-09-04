const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const copy = require('gulp-copy');
const zip = require('gulp-zip');
const clean = require('gulp-clean');

const paths = {
  styles: {
    src: 'new/**/*.scss',
    dest: 'dist',
  },
};

gulp.task('styles', () => {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('debugStyles', () => {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('watchStyles', () => {
    gulp.watch(paths.styles.src, gulp.parallel('styles'));
});

gulp.task('clean', () => {
  return gulp.src(['release', 'dist'], {read: false, allowEmpty: true})
    .pipe(clean());
});

gulp.task('copy', () => {
  return gulp.src(['*.*', '!release.zip', 'dist/*.min.css', 'public/**/*'], {allowEmpty: true})
    .pipe(copy('release'));
});

gulp.task('zip', () => {
  return gulp.src('release/**/*')
    .pipe(zip('release.zip'))
    .pipe(gulp.dest('.'));
});

gulp.task('release', gulp.series('clean', 'styles', 'copy', 'zip'));