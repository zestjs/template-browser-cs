/*
 * A general, but simple RequireJS AJAX function
 *
 */
define(function() {
  var ajax = {};
  
  /* XHR code - copied from RequireJS text plugin */
  var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
  var XMLHttpRequest;
  
  // the most general possible ajax function
  // callback, errback optional
  // async optional (so API matches server version)
  // headers optional
  // everything else must be supplied
  ajax.send = function(method, url, headers, async, data, callback, errback) {
    if (typeof headers != 'object') {
      errback = callback;
      callback = data;
      data = async;
      async = headers;
      headers = {};
    }
    if (typeof async != 'boolean') {
      errback = callback;
      callback = data;
      data = async;
      async = true;
    }
    
    var xhr, i, progId;
    if (typeof XMLHttpRequest !== 'undefined')
      xhr = new XMLHttpRequest();
    else if (typeof ActiveXObject !== 'undefined')
      for (i = 0; i < 3; i += 1) {
        progId = progIds[i];
        try {
          xhr = new ActiveXObject(progId);
        }
        catch (e) {}
  
        if (xhr) {
          progIds = [progId];  // so faster next time
          break;
        }
      }
    
    xhr.open(method, url, async);

    for (var header in headers)
      xhr.setRequestHeader(header, headers[header]);
    
    xhr.onreadystatechange = function(evt) {
      var status, err;
      //Do not explicitly handle errors, those should be
      //visible via console output in the browser.
      if (xhr.readyState === 4) {
        status = xhr.status;
        if (status > 399 && status < 600) {
          //An http 4xx or 5xx error. Signal an error.
          err = new Error(url + ' HTTP status: ' + status);
          err.xhr = xhr;
          if (errback)
            errback(err);
        }
        else if (callback)
          callback(xhr.responseText);
      }
    }
    
    xhr.send(data);
  }
  
  //the convenient ajax functions
  ajax.get = function(url, headers, callback, errback) {
    ajax.send('GET', url, headers, null, callback, errback);
  }
  ajax.post = function(url, headers, data, callback, errback) {
    ajax.send('POST', url, headers, data, callback, errback);
  }
  ajax.put = function(url, headers, data, callback, errback) {
    ajax.send('PUT', url, headers, data, callback, errback);
  }
  ajax.del = function(url, headers, callback, errback) {
    ajax.send('DELETE', url, headers, null, callback, errback);
  }
  return ajax;
});
