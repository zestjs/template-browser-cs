{
  appDir: 'www',
  dir: 'www-built',

  mainConfigFile: 'www/main.js',

  // faster build - only minifies layers
  keepBuildDir: true,

  modules: [
    {
      name: '../main',
      include: ['cs!app/Dialog/dialog'],
      exclude: ['coffee-script'],
      excludeShallow: ['require-css/css-builder', 'require-less/lessc-server', 'require-less/lessc']
    }
  ]
}
