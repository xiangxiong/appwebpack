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






















