require({
  baseUrl: 'lib',
  paths: {
    'app': '../app'
  },
  map: {
    '*': {
      'css': 'require-css/css',
      'less': 'require-less/less',
      'is': 'require-is/is'
    }
  }
}, ['zest', 'app/Hello/hello'], function($z, Hello) {
  $z.render(Hello, {
    welcome: ' to ZestJS'
  }, document.body);
});
