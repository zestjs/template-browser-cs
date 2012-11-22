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
}, ['zest', 'app/WelcomeComponent/welcome-component'], function($z, WelcomeComponent) {
  $z.render(WelcomeComponent, {
    welcome: ' to ZestJS'
  }, document.body);
});
