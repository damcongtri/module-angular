import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tudoList: any = [

  ]
  tudo: any = {
    name: '',
    status: false
  }
  constructor() { }

  ngOnInit(): void {
  }
  getLocal() {
    if (localStorage.getItem('hihi')) {
      let data: any = localStorage.getItem('hihi')
      this.tudoList = JSON.parse(data)
    }
  }
  addTudo(): void {
    this.tudoList.push(this.tudo)
    localStorage.setItem('hihi', JSON.stringify(this.tudoList))
    this.getLocal()
  }
  status(i: number) {
    let data = this.tudoList.find((item: any, key: number) => {
      return key == i
    })
    if (data.status == false) {
      data.status = true
    } else {
      data.status = false
    }
    localStorage.setItem('hihi', JSON.stringify(this.tudoList))
    this.getLocal()

  }
  remove(i: number) {
    let index = this.tudoList.findIndex((item: any, key: number) => {
      return key == i
    })

    if (confirm('Bạn có chắc muốn xóa không ')) {
      this.tudoList.splice(i, 1)
      localStorage.setItem('hihi', JSON.stringify(this.tudoList))
      this.getLocal()
    }
  }

}
