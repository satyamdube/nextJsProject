// module.exports = {
//   reactStrictMode: true,
// }

// const withSass = require('@zeit/next-sass');
const withImages = require("next-images");
// const withLess = require('@zeit/next-less')

module.exports = withImages({
  env: {
    ANY_ENV_KEY: "ANY_ENV_VARIABLE",
  },
});
