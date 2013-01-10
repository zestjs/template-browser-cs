define ['zest', 'jquery'], ($z, $) ->
  (el, o) ->
    clickEvent = $z.fn()
    $(el).click clickEvent

    click: clickEvent
    dispose: -> 
      $(el).unbind()
