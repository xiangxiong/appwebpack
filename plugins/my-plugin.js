const JSZip = require('jszip');
const zip = new JSZip();
const RawSource = require('webpack-sources').RawSource;

module.exports = class MyPlugin{
    constructor(options){
        this.options = options;
    }

    apply(compiler){
        compiler.hooks.emit.tapAsync('ZipPlugin',(compilation,callback)=>{
            const folder = zip.folder(this.options.filename);

            for(let filename in compilation.assets){
                const source = compilation.assets[filename].source(); 
                folder.file(filename,source);
                console.log('source',source);
            }

            zip.generateAsync({
                type:'nodebuffer'
            }).then((content)=>{
                const outPutPath = path.join(compilation.options.output.path,
                    this.options.filename+'.zip');

                const outPutRelativePath = path.relative(
                    compilation.options.output.path,
                    outPutPath
                )
                compilation.assets[outPutRelativePath]  = new RawSource(content);

                callback();
                // console.log(content);
            });
        });
        // console.log('My plugin is executed');
        // console.log('My plugin is options',this.options);
    }
}

/***
 * 
 *  插件的错误处理
 *  参数校验阶段可以直接throw 的方式抛出.
 *  throw new Error('Error Message')
 *   
 *  通过 compliation 对象的 warings 和 errors 接收.
 * 
 *  插件扩展: 编写插件的插件. 
 *  插件自身也可以通过暴露hooks 的方式进行自身扩展, html-webpack-plugin.
 *  
 *  nodejs 文件压缩成zip包.
 *  要求: 生成的zip 包文件名称可以通过插件传入.
 *  需要使用complier 对象上的特定的Hooks 进行传入.
 * 
 * */
