REST
====

A RequireJS module to allow for REST services and calls both on the client and server side.

Additionally, comes with a basic JSON request API for sending and receiving JSON both client and server side.

When on the client, an AJAX library is used. When on the server, the NodeJS http library is used, both with the same API.

_If Rhino support is needed, please post a feature request / pull request._

Install
---

```
volo add guybedford/rest
```

If not using Volo, ensure you download [RequireIS](https://github.com/guybedford/require-is) as well. This allows the conditional server / client code loading.

```javascript
  {
    map: {
      '*': {
        'http': 'rest/http'
      }
    }
  }
```

API
---

#### HTTP API

```javascript
  http.send(method, url, headers, data, callback, errback);
  http.get(url, headers, callback, errback);
  http.post(url, headers, data, callback, errback);
  http.put(url, headers, data, callback, errback);
  http.del(url, headers, callback, errback);
  
  data is a string
  callback has the response string as its argument
  headers, callback and errback are all optional arguments.
```

#### JSON API

Located at `'rest/json'`. Automatically includes the headers:

   `Content-Type: application/json; charset=utf-8`
   `accept: application/json`
   

```javascript
  json.send(method, url, headers, data, callback, errback);
  json.get(url, headers, callback, errback);
  json.post(url, headers, data, callback, errback);
  json.put(url, headers, data, callback, errback);
  json.del(url, headers, callback, errback);
  
  data is an object
  callback has the response JSON as its argument (if not a JSON response, an error is thrown)
  headers, callback and errback are all optional arguments.
```

Example
---

```javascript
  define(['rest/http'], function(http) {
    http.get('local-service/api', function(response) {
      //do something with the response
    }, function(err) {
      //do something with the error
    });
  });
```
