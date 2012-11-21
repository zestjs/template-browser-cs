define(['css!./sample'], function() {
  return {
    render: function(o) {
      return '<h1>' + o.text + '</h1>';
    },
    pipe: function(o) {
      return o;
    },
    attach: function(o, $$) {
      $$[0].addEventListener('click', function() {
        alert(o.msg);
      });
    }
  };
});
