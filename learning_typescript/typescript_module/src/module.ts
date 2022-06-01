function sayHello() {
    return "hello my master"
}

// es6 导出
export {
    sayHello
}
// es6 默认导出(匿名),一个模块只能有一个默认导出
export default sayHello



// commonjs 导出(两种)
module.exports = {
    sayHello
}
exports.sayHello = sayHello
