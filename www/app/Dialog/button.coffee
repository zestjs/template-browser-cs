define ['zest', 'less!./button'], ($z) ->
  className: 'MyButton'
  options:
    text: 'Button'
  render: (o) -> "<button>#{$z.esc(o.text, 'htmlText')}</button>"
    
  attach: 'cs!./button-attach'