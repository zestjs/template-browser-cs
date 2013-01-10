{
  appDir: 'www',
  dir: 'www-built',

  mainConfigFile: 'www/main.js',

  // faster build - only minifies layers
  skipDirOptimize: true,
  keepBuildDir: true,

  modules: [
    {
      name: '../main',
      include: ['zest/build!com!cs!app/Dialog/dialog'],
      exclude: ['coffee-script']
    }
  ]
}
