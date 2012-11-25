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
}, ['cs!app/main']);
