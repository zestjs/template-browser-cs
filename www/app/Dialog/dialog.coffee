define ['zest', 'com!cs!./button', 'css!./dialog'], ($z, Button) ->
  type: 'SimpleDialog'
  options:
    width: 400
    height: 300
  render: (o) -> """
    <div style="
      width: #{$z.esc(o.width, 'num', @options.width)}px;
      height: #{$z.esc(o.height, 'num', @options.height)}px;
    ">
      {`content`}
      <div class='button'>{`button`}</div>
    </div>
  """

  button: (o) ->
    render: Button
    options:
      text: o.confirmText

  attach: 'cs!./dialog-attach'
