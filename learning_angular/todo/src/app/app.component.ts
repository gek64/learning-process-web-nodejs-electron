import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo'

  // filter union 类型，只能取三个值中的一个，然后赋值
  // https://ts.xcatliu.com/advanced/string-literal-types.html
  filter: "all" | "active" | "done" = "all"

  // 数组内部包含 interface
  allItems = [
    {description: "eat", done: true},
    {description: "sleep", done: false},
    {description: "play", done: false},
    {description: "laugh", done: false},
  ]

  public get items() {
    if (this.filter === "all") {
      return this.allItems
    }
    return this.allItems.filter(item => this.filter === "done" ? item.done : !item.done)
  }

  addItem(description: string) {
    this.allItems.unshift({description, done: false})
  }
}
