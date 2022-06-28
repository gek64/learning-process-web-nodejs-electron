# nodejs 学习

## 基础
- [x] 变量类型、声明方式、变量作用域
- [x] 条件选择、循环
- [x] 函数、匿名函数
- [x] 自定义包引入导出
- [x] 类、方法函数

## 前期准备
```sh
# 安装typescript
npm install typescript

# 运行
tsc main.ts && node main.js
```

## 变量类型、声明方式、变量作用域
### 变量类型
- 基本类型 `any` `number` `string` `boolean`
- 数组 `string[]`
- 元组（加强版数组，规定好了数组内有几个元素，和元素的类型）`[number, boolean, string]`，可选元素个数元组`[number, boolean?, string?]`，可选元素声明在必选元素后
```ts
let cc: [string, number, number?, string?]

cc = ["cc", 2000, 1000, "japan"]
console.log(cc)

cc = ["cc", 2000]
console.log(cc)
```
- 枚举 
```ts
enum cc {
    name = "cc",
    age = 2000,
    id = 1000,
    country = "japan"
}
console.log(cc.age)
```
- undefined
未定义

### 声明方式
```ts
let username: string = "cc"
console.log(username)

// 常量无法更变值
const username: string = "cc"

//var 尽量别用
```

### 变量作用域
- 与`golang`类似


## 条件选择、循环
### 条件选择
#### if else else if
- 与`golang`相同

#### switch
- 需要用`break`
```ts
let x: number = 5
switch (x >= 0) {
    case true:
        console.log("x 是正数")
        break
    case false:
        console.log("x 是负数")
        break
    default:
        console.log("默认")
        break
}
```

### 循环
#### for
- fori
```tsof
for (let i = 0; i < 5; i++) {
    console.log(i)
}
```
- forin（只能遍历数组）
```ts
let array: number[] = [0, 1, 2, 3, 4, 5]

for (const arrayKey in array) {
    console.log(arrayKey)
}
```
- forof（支持遍历更多的类型，用于代替forin）**推荐使用这个！！！**
```ts
let array: number[] = [0, 1, 2, 3, 4, 5]

for (const arrayKey of array) {
    console.log(arrayKey)
}
```

#### while
- while
```ts
let i: number = 0
while (i < 5) {
    console.log(i)
    i++
}
```
- do while
```ts
let i: number = 0
do {
    console.log(i)
    i++
} while (i < 5)
```
#### break continue
- 与`golang`中作用相同

### 函数、匿名函数
- 不支持多返回值

#### 函数
```ts
function add(n1: number, n2: number): number {
    return n1 + n2
}
console.log(add(1, 2))

// 函数带默认参数，可以不传入此参数
function add(n1: number, n2: number = 1): number {
    return n1 + n2
}
console.log(add(1))

// 函数传入参数可以选，不传入时n2类型为 undefined
function add(n1: number, n2?: number): number {
    if (typeof n2 === "undefined") {
        return n1 + 10
    }
    return n1 + n2
}
console.log(add(1, 2))
console.log(add(1))

// 函数传入不定数量的参数
function add(startNumber: number, ...numberArray: number[]): number {
    let result: number = startNumber
    for (const n of numberArray) {
        result = result + n
    }
    return result
}
console.log(add(1, 2, 3, 4, 5, 6))
```

### 匿名函数
#### Lambda 函数 箭头函数
- 多用于函数触发器
```ts
let add = (a: number, b: number) => {
    return a + b
}
console.log(add(1, 2))
```

## 自定义包引入导出
- https://github.com/gek64/learning-process-web-nodejs-electron/tree/main/learning_typescript/typescript_module

## 接口、类、方法函数
- https://github.com/gek64/learning-process-web-nodejs-electron/tree/main/learning_typescript/typescript_type_class_method