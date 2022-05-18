# nodejs 学习

## 基础
- [x] 变量类型、声明方式、变量作用域
- [x] 条件选择、循环
- [ ] 函数、匿名函数
- [ ] 自定义包引入导出
- [ ] 类、方法函数
- [ ] 语言局限性

## 前期准备
```sh
# 全局安装typescript
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

### 声明方式
```ts
let username: string = "cc"
console.log(username)

// 静态变量无法更变值
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
