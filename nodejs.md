# nodejs 学习

## 基础
- [x] 变量类型、声明方式、变量作用域
- [ ] 循环选择分支语句
- [ ] 函数、匿名函数
- [ ] 自定义包引入导出
- [ ] 类、方法函数
- [ ] 语言局限性

### 前期准备
```sh
# 全局安装typescript
npm install typescript
```

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

#var 尽量别用
```

### 变量作用域
- 与`golang`类似


### 条件选择
#### if else else if
- 与`golang`相同

#### switch
