import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo'

  // 没看懂联合类型中的 = 代表什么
  filter: "all" | "active" | "done" = "all"

  allItems = [
    {description: "eat", done: true},
    {description: 'sleep', done: false},
    {description: 'play', done: false},
    {description: 'laugh', done: false},
  ]

  get items() {
    if (this.filter === "all") {
      return this.allItems
    }
    // item => this.filter === 'done' ? item.done : !item.done 函数没看懂
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done)
  }
}
