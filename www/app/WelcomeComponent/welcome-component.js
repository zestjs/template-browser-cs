define(['jquery', 'css!./welcome-component'], function($) {
  return {
    options: {
      name: ' to ZestJS'
    },
    render: function(o) {
      return '<div class="welcome">Welcome ' + o.name + '.</div>';
    },
    attach: function(o, els) {
      setTimeout(function() {
        $(els).fadeIn(500);
      }, 1000);
    }
  };
});
