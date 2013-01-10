require({
  baseUrl: 'lib',
  paths: {
    'app': '../app'
  },
  map: {
    '*': {
      'css': 'require-css/css',
      'less': 'require-less/less',
      'is': 'require-is/is',
      'selector': 'jquery',
      'com': 'zest/com',
      'cs': 'require-coffee/cs'
    }
  }
}, ['cs!app/main']);
