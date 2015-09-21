// Enter the following in the Developer Tools, will favorite all tweets on the page and keep scrolling

a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible').click();
}, 1000)

// Enter this to end it: clearInterval(a)
