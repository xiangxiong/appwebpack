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









