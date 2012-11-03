//service wrapper for JSON service requests to work both client & server side
//takes data as a javascript object, sends with application/json, and accept header for application/json, including response parsing.
define(['is!browser?./ajax:./node-http'], function(http) {
  return {
    send: function(method, url, headers, data, callback, errback) {
      //headers argument optional
      if (typeof headers != 'function') {
        errback = callback;
        callback = headers;
        headers = {};
      }
      //data optional
      if (typeof data == 'function') {
        callback = data;
        data = undefined; //(JSON.stringify(undefined) = undefined)
      }
      
      var _headers = {};
      for (var header in headers)
        _headers[header] = headers[header];
      
      _headers.contentType = 'application/json; charset=utf-8';
      _headers.accept = 'application/json';
      
      http.send(method, url, _headers, JSON.stringify(data), callback ? function(data) {
        try {
          callback(JSON.parse(data));
        }
        catch (e) {
          errback('Unable to parse JSON');
        }
      } : null, errback);
    },
    post: function(url, headers, data, callback, errback) {
      this.send('POST', url, headers, data, callback, errback);
    },
    get: function(url, headers, callback, errback) {
      this.send('GET', url, headers, null, callback, errback);
    },
    put: function(url, headers, data, callback, errback) {
      this.send('PUT', url, headers, data, callback, errback);
    },
    del: function(url, headers, callback, errback) {
      this.send('DELETE', url, headers, null, callback, errback);
    }
  };
});
