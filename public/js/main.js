// requirejs setup to use for the front-end in the homepage
requirejs.config({
  baseDir:'/js',
  paths: {
    'jquery':           '/bower/jquery/jquery',
    'text':             '/bower/text/text',
    'localized':        '/bower/webmaker-i18n/localized',
    'languages':        '/bower/webmaker-language-picker/js/languages',
    'list':             '/bower/listjs/dist/list.min',
    'fuzzySearch':      '/bower/list.fuzzysearch.js/dist/list.fuzzysearch.min',
    'browser-screen':   'browser-screen',
    'sso-override':     'sso-override',
    'auth-login':       'auth-login',
    'google-analytics': 'google-analytics',
    'bookmarklet':      '/src/get-bookmarklet-url',
    'yepnope':          '../yepnope.1.0.2-min',
    'publication':      '../publication'
  },
  shim: {
    'publication': {
      deps: ['jquery'],
      exports: '$'
    }
  }
});

require(['jquery', 'languages', 'browser-screen', 'auth-login', 'sso-override', 'bookmarklet', 'yepnope'],
  function ($, Languages) {
    'use strict';
    // Call this when language picker element is ready.
    Languages.ready({ position: 'bottom', arrow: 'top' }, true);
});
