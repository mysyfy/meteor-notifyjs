Package.describe({
  name: 'mysyfy:notifyjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'meteor package for notifyjs https://github.com/alexgibson/notify.js',
  // URL to thttps://github.com/mysyfy/meteor-notifyjs.gitge.
  git: 'https://github.com/mysyfy/meteor-notifyjs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('notifyjs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mysyfy:notifyjs');
  api.addFiles('notifyjs-tests.js');
});
