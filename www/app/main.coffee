define ['zest', 'cs!app/Dialog/dialog'], ($z, Dialog) ->
  $z.render Dialog,
    width: 300
    height: 50
    content: """
      <p>Welcome to ZestJS.</p>
    """
    confirmText: 'Close'
  , document.body
