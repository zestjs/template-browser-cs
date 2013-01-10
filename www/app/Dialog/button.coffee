define ['zest', 'css!./button'], ($z) ->
  type: 'MyButton'
  options:
    text: 'Button'
  render: (o) -> "<button>#{$z.esc(o.text, 'htmlText')}</button>"
    
  attach: 'cs!./button-attach'