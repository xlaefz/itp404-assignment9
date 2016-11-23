var dotenv = require('dotenv');
dotenv.config();
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key:process.env.consumer_key,
  consumer_secret:process.env.consumer_secret,
  token:process.env.token,
  token_secret:process.env.token_secret
});

module.exports = {
  search: function(searchOptions) {
  var promise = yelp.search(searchOptions);
  return promise;
  }
};
