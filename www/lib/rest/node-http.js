var http = require.nodeRequire('http');
var urlParser = require.nodeRequire('url');
define(function() {
  return {    
    //headers, callback, errback optional
    send: function(method, url, headers, data, callback, errback) {
      if (typeof headers != 'object') {
        errback = callback;
        callback = data;
        data = headers;
        headers = {};
      }
      
      var requestOptions = urlParser.parse(url);
      
      requestOptions.headers = headers;
      requestOptions.headers['Content-Length'] = str_data != undefined ? str_data.length : 0
      
      requestOptions.method = method;
      
      var _data = [];
      var _req = http.request(requestOptions, function(_res) {
        _res.setEncoding('utf8');
        _res.on('data', function (chunk) {
          _data.push(chunk);
        });
        _res.on('end', function() {
          if (callback)
            callback(_data.join(''));
        });
      });
      if (errback)
        _req.on('error', errback);
      _req.end(data);
    },
    get: function(url, headers, callback, errback) {
      this.send('GET', url, headers, null, callback, errback);
    },
    post: function(url, headers, data, callback, errback) {
      this.send('POST', url, headers, data, callback, errback);
    },
    put: function(url, headers, data, callback, errback) {
      this.send('PUT', url, headers, data, callback, errback);
    },
    del: function(url, headers, callback, errback) {
      this.send('DELETE', url, headers, null, callback, errback);
    }
  };
});
