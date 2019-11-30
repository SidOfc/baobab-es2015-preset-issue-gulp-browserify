const {parallel, series, dest} = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const babelify = require('babelify');

function bundle() {
    return browserify({
        entries: ['./src/js/application.jsx'],
        debug: true,
        transform: [babelify]
    })
        .bundle()
        .on('error', console.error)
        .pipe(source('./application.js'))
        .pipe(buffer())
        .pipe(dest('./dist/js'));
}

module.exports = {
    default: bundle
};
