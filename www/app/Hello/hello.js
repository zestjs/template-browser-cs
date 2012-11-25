define(['zest', 'jquery', 'css!./hello'], function($z, $) {
  return {
    options: {
      name: ' to ZestJS'
    },
    render: function(o) {
      return '<div class="welcome">Welcome ' + $z.esc(o.name, 'htmlText') + '.</div>';
    },
    attach: function(els) {
      setTimeout(function() {
        $(els).fadeIn(500);
      }, 1000);
    }
  };
});
