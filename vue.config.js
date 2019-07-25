const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const MarkdownItContainer = require('markdown-it-container')
const MarkdownItCheckBox = require('markdown-it-task-checkbox')
const MarkdownItDec = require('markdown-it-decorate')
const utils = require('./build/utils')

// const vueMarkdown =
module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/pc/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: config => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (process.env.NODE_ENV !== 'production') {
      // 开发环境配置
      config.devtool = 'source-map'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('@pc', resolve('examples/pc'))
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        preprocess: (MarkdownIt, source) => {
          MarkdownIt.renderer.rules.table_open = function() {
            return '<table class="table">'
          }
          // ```html``` 给这种样式加个class hljs
          MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(
            MarkdownIt.renderer.rules.fence
          )
          // ```code``` 给这种样式加个class code_inline
          const codeInline = MarkdownIt.renderer.rules.code_inline
          MarkdownIt.renderer.rules.code_inline = function(...args) {
            args[0][args[1]].attrJoin('class', 'code_inline')
            return codeInline(...args)
          }
          return source
        },
        use: [
          [
            MarkdownItContainer,
            'demo',
            {
              validate: params => params.trim().match(/^demo\s*(.*)$/),
              render: function(tokens, idx) {
                if (tokens[idx].nesting === 1) {
                  return `<demo-block>
                              <div slot="highlight">`
                }
                return '</div></demo-block>\n'
              }
            }
          ],
          [
            MarkdownItCheckBox,
            {
              disabled: true
            }
          ],
          [MarkdownItDec]
        ]
      })

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('examples/pc/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('examples/pc/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hot: true,
    hotOnly: true
  },
  css: {
    loaderOptions: {}
  }
}
