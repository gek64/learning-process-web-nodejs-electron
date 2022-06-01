import * as myModule from "./module"

let tom: myModule.boy = {
    name: "tom",
    age: 12,
    address: "red street"
}

let bob = new myModule.person("bob", 18)
bob.showDetail()

let alice = new myModule.man("alice", 26)
alice.showDetail()
alice.showManDetail()