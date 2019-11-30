# Baobab issue repo with es2015 babel preset

When using baobab together with [gulp](https://www.npmjs.com/package/gulp) and [browserify](https://www.npmjs.com/package/browserify),
it appears that browserify wants the end-user to install the [es2015 preset](https://www.npmjs.com/package/babel-preset-es2015).

In order to reproduce I first actually tried to use [webpack](https://github.com/SidOfc/baobab-es2015-preset-issue-webpack)
which actually worked fine.

Just in case, I'll leave install instructions for both in this REAMDE.

## Webpack repro steps

This repro uses webpack and actually works, no errors or asking for a preset to be installed.
In a terminal:

```bash
$ git clone https://github.com/SidOfc/baobab-es2015-preset-issue-webpack
$ cd baobab-es2015-preset-issue-webpack
$ npm i
$ npm run build
```

## Browserify repro steps

This example causes an error when built, there are some comments in: `src/js/application.jsx`
about what to comment out in order to silence the error.

```bash
$ git clone https://github.com/SidOfc/baobab-es2015-preset-issue-gulp-browserify
$ cd baobab-es2015-preset-issue-gulp-browserify
$ npm i
$ npx gulp
```

The actual error message received looks like this:

> Error: Cannot find module 'babel-preset-es2015' from '/home/user/path/to/baobab-es2015-preset-issue-gulp-browserify' while parsing file:
