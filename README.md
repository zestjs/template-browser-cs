ZestJS Single Page App Template
===

From the ZestJS Quick Start at http://zestjs.org/

Install
---

Use Volo (`npm install volo -g` in the comamnd line with [nodejs](http://nodejs.org)).

```
 volo create folder_name zestjs/template-browser-cs
```

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
* CoffeeScript is compiled
