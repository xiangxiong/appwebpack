# 为什么么需要构建工具?

* 转换 ES6 语法.
* 转换 JSX.
* CSS 前缀补全/预处理.
* 压缩混淆.
* 图片压缩.

# 前端构建演变之路.
* rollup webpack.

# 为什么选择 webpack?

# 玩转 webpack?
* 

# 核心概念Entry
* Entry 用来来制定打包的入口.
    * 模拟依赖图.
    ( js,css,.jpg 多是模块.)
* webpack 核心概念之output.

单入口对象
```
module.exports = {
    entry:'./path/to/my/entry/file.js'
}
```

多入口: entry 是一个对象.

```
module.exports = {
    entry:{
        app:'./src/app.js',
        adminApp:'./src/adminApp.js'
    }
}
```

# 核心概念之 Output
Output 来告诉 webpack 如何将编译后的 件输出到磁盘.

```
 output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
```

# 核心概念之 Loaders

```
webpack 开箱即用只支持 JS 和 JSON 两种文件类型,通过 Loaders 去支持其它文 件类型并且把它们转化成有效的模块,并且可以添加到依赖图中。

本身是一个函数,接受源文件作为参数,返回转换的结果。

loaders:

css-loader.
less-loader.
ts-loader.
raw-loader.
```

用法:

# 核心概念之 plugins.
插件 于 bundle  件的优化,资源管 和环境变注入.
作用于整个构建过程.


CommonsChunkPlugin 将chunks相同的模块代码提取成公共js.
cleanWebpackPlugin 清理构建目录.
UglifyjsWebpackPlugin 压缩js.
ExtracTextWebpackPlugin  将 css 从 bundle 文件里提取成一个独立的css 文件.
CommonsChunkPlugin  将chunks 相同的模块代码提取成公共js.
ZipWebpackPlugin 将打包的资源生成一个zip包.
CopyWebpackPlugin 将文件或者文件夹拷贝到构建的输出目录.

用法:
```

```

# 核心概念之 Mode.
Mode 用来指定当前的构建环境是: production、development 还是none.

设置 mode 可以使用 webpack 内置的函数,默认值为 production.

development.
NamedChunksPlugin

production.
FlagDependencyUsagePlugin.

none
不开启优化选项.

```

```

# 资源解析: 解析es6.
使用 babel-loader.
babel 的配置文件:.babelrc.

```
presets:

plugins:
```
npm i @babel/core @babel/preset-env babel-loadr -D


presets 是一系列 plugins 的集合.

# 资源解析:解析 React JSX.

npm i react react-dom @babel/preset-react -D

```
{
    "presets":[
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

# 资源解析:解析 CSS/less/sass.
* css-loader  于加载 .css  件,并且转换成 commonjs 对象
* style-loader 将样式通过 <style> 标签插 到 head 中.

* npm i style-loader css-loader -D.

* webpack 执行是从右到左执行的，所以先写style-loader,css-loader.

* less-loader 用于将 less 转换成 css.

npm i less less-loader -D

```
    {
        test:/.less$/,
        use:[
            'style-loader',
            'css-loader',
            'less-loader'
        ]   
    }
```

# 资源解析:解析图片 和字体资源.
* file-loader 用于处理文件.
* npm i file-loader -D.
```
    {
        test:/.(png|jpg|gif|jpeg)$/,
        use:'file-loader'
    }
```
* url-loader 也可以处图片和字体.
* 可以设置较小资源自动base64.

```
 {
                test:/.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:10240
                        }
                    }
                ]
}
```
# 资源解析: webpack 中的文件的监听.
文件监听是在发现源码发 变化时, 动重新构建出新的输出 件。
webpack 开启监听模式,有两种方式: 
·启动 webpack 命令时,带上 --watch 参数 
·在配置 webpack.config.js 中设置 watch: true

```
 "watch": "webpack --watch"
```

文件监听的原理分析:
轮询判断 件的最后编辑时间是否变化
某个 件发  变化,并 会 刻告诉监听者, 是先缓存起来,等 aggregateTimeout




# 热更新:webpack-dev-server
WDS 不刷新浏览器.
WDS 不输出文件, 而是放在内存里面.
使  HotModuleReplacementPlugin插件。

```

npm i webpack-dev-server --save

```
# 热更新:使用webpack-dev-middleware
Webpack Compile: 将 JS 编译成 Bundle
HMR Rumtime: 会被注 到浏览 ,  新 件的变化
Bundle server: 提供 件在浏览 的访问
HMR Server: 将热 新的 件输出给 HMR Rumtime
。

# 什么是文件指纹?
打包后输出的文件名的后缀. 版本管理.

Hash:和整个项目的构建相关,只要项目文件有修改,整个项目构建的 hash 值就会改.

Chunkhash:和 webpack 打包的 chunk 有关, 同的 entry 会 成 同的 chunkhash 值

Contenthash:根据 件内容来定义 hash , 件内容 变,则 contenthash 改变. css 文件内容改变.

# 图片的文件指纹设置.

# mini-css-extract-plugin
npm i mini-css-extract-plugin -D
mini-css-extract-plugin 和 style-loader 功能是互斥的。不能一起使用。
mini-css-extract-plugin 将css 单独隔离到一个文件.

# 代码压缩.
HTML 压缩
npm i html-webpack-plugin -D

CSS 压缩.
cssnano.

optimize-css-assets-webpack-plugin

npm i optimize-css-assets-webpack-plugin -D

npm i cssnano -D

修改 html-webpack-plugin 设置压缩参数.

JS 压缩.
uglifyjs-webpack-plugin.

## 玩转 webpack :


## 当前构建时的问题
每次构建的时候 会清理录,造成构建的输出 录 output  件越来越多

rm -rf ./dist && webpack

npm i clean-webpack-plugin -D

const CleanWebPackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

  new CleanWebPackPlugin()

# 23 CSS3 的属性为么需要前缀？


# Post Css 插件:
PostCSS 插件 autoprefixer 自动补  CSS3 前缀.

npm i postcss-loader autoprefixer -D

```
    loader:'postcss-loader',
        options:{
            plugins:()=>[
                    require('autoprefixer')({
                        browsers:['last 2 version','>1%','ios 7']
                    })
            ]
        }
    }
```

# rem 是什么?
移动端 CSS px 自动转换成rem
px2rem-loader.
npm i px2rem-loader -D
npm i lib-flexible -S
自适应方案的设计.

# 资源内联的方案.


# 多页面应用打包通用方案:
* npm i glob -D.
每 次  跳转的时候,后台服务 都会给返回 个新的 html  档, 这种类型的 站也就是多  站,也叫做多 应 .

缺点:每次新增或删除页面需要改 webpack 配置.

多页面方案:
动态获取 entry 和设置 html-webpack-plugin 数量.

利用 glob.sync 文件通用匹配的规则. 同步返回文件的路径.

遍历文件的数组:
利用正则匹配规则或者页面名称.
生成动态的htmlPlugins, 组合到Plugins.

# source map.
* 

## 提取页面的公共资源.

基础库分离.

SplitChunksPlugin:
```
    optimization: {
        splitChunks: { cacheGroups: {
        commons: {
        test: /(react|react-dom)/,
        name: 'vendors',
        chunks: 'all' }
        } }
    }
```

chunks 参数说明:
* async 异步引入的库进行分离(默认).
* initial 同步引入的库进行分离。
* all 所有引入的库进行分离.

引入cdn库:
```
  // new HtmlWebpackExternalsPlugin({
        //     externals:[
        //         {
        //             module:'react',
        //             entry:'https://unpkg.com/react@16/umd/react.production.min.js',
        //             global:'React'
        //         },{
        //             module:'react-dom',
        //             entry:'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
        //             global:'ReactDOM'
        //         }
        //     ]
        // })
```

分离公共包.
```
 optimization: {
        splitChunks: { minSize: 0, cacheGroups: {
        commons: {
                    name: 'commons', 
                    chunks: 'all', 
                    minChunks: 0
                } 
            }
        }
    }

```

### tree shaking(摇树优化).

Tree-shaking 原理
   ES6 模块的特点:
   只能作为模块顶层的语 出现
   import 的模块名只能是字符 常 
   import binding 是 immutable的

代码擦除: uglify 阶段删除无用代码

## 现象:构建后的代码存在大量闭包代码

会导致 么问题?
大量作用域包裹代码,导致体积增 (模块越多越明显)
运 代码时创建的函数作 域变多,内存开销变 

结论:
·被 webpack 转换后的模块会带上 层包裹 
·import 会被转换成 __webpack_require.


## scope hoisting 原理.
原 :将所有模块的代码按照引 顺序放在 个函数作 域 ,然后适当的重命名 
些变 以防 变 名冲突.

### 代码分割的意义

如何使 动态 import?

npm install @babel/plugin-syntax-dynamic-import --save-dev

### webpack 和 eslint 结合.

### webpack 打包库和组件.
* webpack 除 可以 来打包应 ,也可以 来打包 js 库.
* 实现 个 整数加法库的打包
* · 需要打包压缩版和 压缩版本.
* · 持 AMD/CJS/ESM 模块引用.

### 测试.
* 测试.


### loader 的链式调用与执行顺序.
* 























































