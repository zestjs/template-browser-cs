require ['zest', 'cs!app/Hello/hello'], ($z, Hello) ->
  $z.render Hello,
    welcome: ' to ZestJS'
  , document.body
