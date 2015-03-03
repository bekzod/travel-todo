/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/jquery.cookie/jquery.cookie.js');

app.import('bower_components/momentjs/min/moment.min.js');

app.import('bower_components/pikaday/pikaday.js');
app.import('bower_components/pikaday/css/pikaday.css');

app.import('bower_components/nprogress/nprogress.js');
app.import('bower_components/nprogress/nprogress.css');

app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import(
  'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
  {destDir:'fonts'}
);
app.import(
  'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
  {destDir:'fonts'}
);

app.import('bower_components/ic-ajax/dist/cjs/main.js');

module.exports = app.toTree();
