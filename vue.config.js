module.exports = {
  publicPath: '/wyc',
  outputDir: 'wyc',
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.mode = 'development'
    // if (process.env.VUE_APP_MODE === 'production') {
    //   // 为生产环境修改配置...
    //   config.mode = 'production'
    // } else {
    //   // 为开发环境修改配置...
    // }
    // Object.assign(config, {
    //   // 开发生产共同配置
    //   resolve: {
    //     alias: {
    //       '@': path.resolve(__dirname, './src'),
    //       '@c': path.resolve(__dirname, './src/components'),
    //       '@p': path.resolve(__dirname, './src/views')
    //     } // 别名配置
    //   }
    // })
  }
}