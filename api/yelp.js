var dotenv = require('dotenv');
dotenv.config();
var Yelp = require('yelp');

// var yelp = new Yelp({
//   consumer_key: 'zwjGaVRVWnpFhiXaDBoqYw',//process.env.consumer_key,
//   consumer_secret: '1qUMkZ7YHTfyza1MlAEqvWRkdXA',//process.env.consumer_secret,
//   token: 'HQo3rovV3v5z2JzKS2cMW-DepfEcIRof',//process.env.token,
//   token_secret: '80ptjRiqxBIl0sdXAlEY_l9cAYM',//process.env.token_secret,
// });

var yelp = new Yelp({
  consumer_key:process.env.consumer_key,
  consumer_secret:process.env.consumer_secret,
  token:process.env.token,
  token_secret:process.env.token_secret
});
// var yelp = new Yelp({
//   consumer_key:process.env.consumer_key,
//   consumer_secret:process.env.consumer_secret,
//   token:process.env.token,
//   token_secret:process.env.token_secret,
// });

module.exports = {
  search: function(searchOptions) {
  var promise = yelp.search(searchOptions);
  return promise;
  }
};
