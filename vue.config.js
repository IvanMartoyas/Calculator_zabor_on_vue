const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/calc/",
  // devServer: {
  //   host: 'localhost', 
  //   port: 8080,
  // }
})
