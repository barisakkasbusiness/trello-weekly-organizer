/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/61/61456.png', // optional
      text: 'Organize This Week',
      callback: function(t) {
        // for now, just show an alert
        alert('Button works!');
        return t.popup({
          title: 'Organize Cards',
          url: 'moveCards.html',  // we’ll create this later
          height: 200
        });
      }
    }];
  }
});
