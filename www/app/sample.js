define(['css!./sample'], function() {
  return {
    template: function(o) {
      return '<h1>' + o.text + '</h1>';
    },
    attach: function($$, o) {
      alert('component render complete.');
    }
  };
});
