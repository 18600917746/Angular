import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  /*自定义方法*/

  clickFun() {
    alert('触发点击事件');
  }

  keyupFUn(e) {
    console.log(e);
  }
}
