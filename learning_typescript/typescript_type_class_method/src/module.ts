// 接口
interface boy {
    name: string
    age: number
    address: string
}

// 超类
class person {
    public name: string
    public age: number

    // 构造函数,使用 new 新建时调用
    public constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public showDetail() {
        console.log(this.name, this.age)
    }
}

// 继承类
class man extends person {
    public gender: string = "male"

    public constructor(name: string, age: number) {
        // 调用超类的构造函数
        super(name, age)
    }

    public showManDetail() {
        console.log("this is man,his name is", super.name, this.name)
        // 调用超类的方法函数
        super.showDetail()
    }

    // 外部可访问,可被继承(默认)
    public
    // 外部不可访问,不可被继承
    private
    // 外部不可访问,可被继承
    protected
}


export {
    boy,
    person,
    man
}