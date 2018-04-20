import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: any; // 接收父组件传递的参数
  @Input() runFun: any; // 接收父组件传递的方法
  @Output() public parent = new EventEmitter();//通过广播的方式传递数据
  public info = '这是子组件的数据';

  constructor() {
  }


  ngOnInit() {
  }

  chlidFun() {
    this.runFun(this.info);// 执行父组件的方法 进行回调 传递
  }

  putParentFun() {
    this.parent.emit(this.info); // 通过事件的广播的方式传输数据
  }
  run(){
    alert(this.info)
  }

}
