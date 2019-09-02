module.exports = class MyPlugin{
    constructor(options){
        this.options = options;
    }

    apply(compiler){
        console.log('My plugin is executed');
        console.log('My plugin is options',this.options);
    }
}

/***
 *  插件的错误处理
 *  参数校验阶段可以直接throw 的方式抛出.
 *  throw new Error('Error Message')
 *   
 *  通过 compliation 对象的 warings 和 errors 接收.
 * 
 *  */