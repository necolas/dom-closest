// Karma configuration file
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54

module.exports = function (config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '',
    browsers: [ process.env.TRAVIS ? 'Firefox' : 'Chrome' ],
    files: [
      'node_modules/dom-matches/index.js',
      'index.js',
      'test/*.js'
    ],
    frameworks: [
      'commonjs',
      'jasmine'
    ],
    preprocessors: {
      'node_modules/dom-matches/index.js': [ 'commonjs' ],
      'index.js': [ 'commonjs' ],
      'test/*.js': [ 'commonjs' ]
    },
    reporters: [ process.env.TRAVIS ? 'dots' : 'progress' ],
    singleRun: false
  });
};
