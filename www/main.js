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
}, ['zest', 'app/sample/sample'], function($z, Sample) {
  $z.render(Sample, {
    text: 'click me',
    msg: 'thanks'
  }, document.body);
});
