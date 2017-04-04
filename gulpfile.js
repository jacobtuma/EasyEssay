var gulp = require('gulp'),
    gutil = require('gulp-util')

// HTML
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})

// Scripts
gulp.task('scripts', function() {
    var browserify = require('gulp-browserify'),
        reactify = require('reactify'),
        literalify = require('literalify'),
        rename = require('gulp-rename');

    return gulp.src('src/scripts/index.js')
        .pipe(browserify({
            debug: true,
            extensions: ['.jsx', '.js', '.json'],
            transform: [reactify, literalify.configure({
                lodash: 'window._',
                moment: 'window.moment',
                react: 'window.React'
            })]
        }))
        .on('error', function(err) {
            gutil.log(err.message)
        })
        .pipe(rename('client.js'))
        .pipe(gulp.dest('build'))
})

// Styles
gulp.task('styles', function() {
    var stylus = require('gulp-stylus'),
        normalize = require('normalize'),
        rename = require('gulp-rename')

    return gulp.src('src/styles/index.styl')
        .pipe(stylus({
            use: ['nib', normalize.path + '/normalize']
        }))
        .pipe(rename('client.css'))
        .pipe(gulp.dest('build'))
})

// Vendor scripts
gulp.task('vendor', function() {
    var concat = require('gulp-concat')

    gulp.src([
        'bower_components/react/react-with-addons.js',
        'bower_components/lodash/dist/lodash.js',
        'bower_components/moment/moment.js',
        'bower_components/moment/lang/nb.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build'))
})

// Webserver w/LiveReload
gulp.task('serve', ['default', 'watch'], function() {
    var express = require('express'),
        api = require('./api'),
        livereload = require('gulp-livereload'),
        watch = require('gulp-watch'),
        open = require('open')

    var port = process.env.port || 3000

    express()
        .use(api)
        .use(express.static('./build'))
        .use(function(req, res) {
            res.sendfile('./build/index.html')
        })
        .listen(port, function() {
            open('http://localhost:' + port)
        })

    gulp.src('build/**')
        .pipe(watch({
            name: 'build'
        }))
        .pipe(livereload())
})

// Watch
gulp.task('watch', function() {
    gulp.watch('src/index.html', ['html'])
    gulp.watch('src/scripts/**', ['scripts'])
    gulp.watch('src/styles/**', ['styles'])
    gulp.watch('bower_components/**', ['vendor'])
})

gulp.task('default', ['html', 'scripts', 'styles', 'vendor'])