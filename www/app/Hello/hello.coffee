define ['zest', 'jquery', 'css!./hello'], ($z, $) ->
  options:
    name: ' to ZestJS'
  render: (o) -> """
    <div class="welcome">Welcome #{$z.esc o.name, 'htmlText'}.</div>
  """
  attach: (els) ->
    setTimeout ->
      $(els).fadeIn 500
    , 1000
