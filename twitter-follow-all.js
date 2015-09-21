// Enter this in your Developer Tools console.

a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.not-following .user-actions-follow-button.js-follow-btn').click();
}, 1000);

// To end it just type "clearInterval(a)" and then enter
