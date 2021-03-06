const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const indexPageConfig = {
    entry: 'src/main.js',
    template: 'public/index.html',
    // filename: process.env.NODE_ENV === 'production' ? '../index.html' : '',
    title: 'Love Yourself',
    static: process.env.NODE_ENV === 'production' ? '/wyc' : '',
    minify: {
      //移除空格
      collapseWhitespace: false,
      //移除注释
      removeComments: false
    }
}

if (process.env.NODE_ENV === 'production') {
  indexPageConfig.filename = '../index.html'
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/wyc' : '/',
  outputDir: 'wyc',
  productionSourceMap: false,
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: `@import "~@/assets/sasss.scss";`
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@img', resolve('src/assets/img'))
      .set('@style', resolve('src/assets/style'))
  },
  configureWebpack: (config) => {
    config.mode = process.env.NODE_ENV
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
  },
  pages: {
    index: indexPageConfig
    // index: {
    //   entry: 'src/main.js',
    //   template: 'public/index.html',
    //   filename: process.env.NODE_ENV === 'production' ? '../index.html' : '',
    //   title: 'Welcome',
    //   minify: {
    //     //移除空格
    //     collapseWhitespace: false,
    //     //移除注释
    //     removeComments: false
    //   }
    // }
  }
}