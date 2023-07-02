const pkg = require("./package.json")

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: "./",
  outputDir: `./${pkg.name}`,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    port: "3102",
  },
  transpileDependencies: [
    "sockjs-client",
  ]
};
