ZestJS Single Page App Template
===

Install
---

Use Volo (`npm install volo -g` in the comamnd line with [nodejs](http://nodejs.org)).

```
 volo create folder_name zestjs/template-singlepage 
```

Alternatively, [download the full project including the dependencies here](https://github.com/downloads/zestjs/template-browser-cs/zest-template-browser-cs.zip).

Load `www/index.html` in the browser to run.


Build
---

First, install the r.js optimizer:

```
  npm install requirejs -g
```

Then to build everything into one file, run the build script from the base project folder:

```
  r.js -o build.js
```

Then load the app from `www-built/index.html`.

The entire app is loaded from one script resource, including - 
* Templates are compiled
* CSS and LESS is inlined into script
* CoffeeScript is compiled if using [require-cs](https://github.com/jrburke/require-cs)