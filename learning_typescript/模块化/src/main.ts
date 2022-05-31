// es6 模块导入是静态的，模块的依赖关系建立在代码编译阶段，导入的是对原有值的引用，原有被导入模块值变化会影响到当前模块导入的东西
// es6 导入
import {sayHello} from "./module"
import {sayHello as sayAgain} from "./module"
import * as esModule from "./module"
// es6 导入默认导出的内容
import esModuleDefault from "./module"

sayHello()
sayAgain()
esModule.sayHello()
esModuleDefault()

// commonjs 模块导入是动态的，模块的依赖关系建立在代码执行阶段，导入的是对原有值的拷贝，原有被导入模块值变化不会影响到当前模块导入的东西
// commonjs 导入(使用require来导入)
const commonModule = require("./module")
commonModule.sayHello()