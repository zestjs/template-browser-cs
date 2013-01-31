define ['zest'], ($z) ->
  (el, o) ->
    MyButton = $z.select '>.button .MyButton', el
    MyButton.click.on -> $z.dispose el
