# twitter-follow-all
Follows all twitter users on a page.

## Follow all users on the page:
---

// Enter this in your Developer Tools console.

a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.not-following .user-actions-follow-button.js-follow-btn').click();
}, 1000);

// To end it just type "clearInterval(a)" and then e

## Favorite all tweets on the page:
---

// Enter the following in the Developer Tools, will favorite all tweets on the page and keep scrolling

a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible').click();
}, 1000)

// Enter this to end it: 

clearInterval(a)
