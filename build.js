{
  appDir: 'www',
  dir: 'www-built',

  mainConfigFile: 'www/main.js',

  // faster build - only minifies layers
  skipDirOptimize: true,
  keepBuildDir: true,

  // dont include the coffeescript compiler in the build
  stubModules: ['cs'],

  modules: [
    {
      name: '../main'
    }
  ]
}
