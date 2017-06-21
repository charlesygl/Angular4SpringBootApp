"use strict";

const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('./tsconfig.json');
const del = require('del');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');

const staticDir = './src/main/resources/static/';
const webAppDir = './src/angular/';

const lib = [
    'core-js/client/shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system.src.js',
    'reflect-metadata/Reflect.js',
    'rxjs/**/*.js',
    'zone.js/dist/**',
    '@angular/**/bundles/**'
];

gulp.task('library', () => {
    return gulp.src(lib, {cwd: "node_modules/**"})
        .pipe(newer(staticDir + 'lib/'))
        .pipe(gulp.dest(staticDir + 'lib/'))
});

gulp.task('typescript-compile', () => {
    return  gulp.src([webAppDir + '**/*.ts']) // webAppDir + '**/*.ts'
        .pipe(newer({dest: staticDir, ext: '.js'}))
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(staticDir))
});


gulp.task('html-replace', () => {
    return gulp.src(webAppDir + '**/*.html')
        .pipe(newer(staticDir))
        .pipe(sourcemaps.init())
        .pipe(htmlmin({collapseWhitespace: true, caseSensitive: true}))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(staticDir))
});

// gulp.task('html-replace', () => {
//     return gulp.src('./src/angular/**/*.html')
//         .pipe(gulp.dest('./src/main/resources/static/'));
// });


gulp.task('css-replace', () => {
    return gulp.src(webAppDir + '**/*.scss') //.scss
        .pipe(newer({dest: staticDir, ext: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(staticDir))
});

gulp.task('build', ['typescript-compile', 'library', 'html-replace', 'css-replace']);
gulp.task('default', ['typescript-compile', 'html-replace', 'css-replace']);

gulp.task('watch', function() {
    gulp.watch(webAppDir + '**/*.ts', ['typescript-compile']);
    gulp.watch(webAppDir + '**/*.html', ['html-replace']);
    gulp.watch(webAppDir + '**/*.scss', ['css-replace']);
});