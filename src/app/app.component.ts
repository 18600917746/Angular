import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '这是父组件传递的数据';
  json = {'name': 'chengpnapan'};
  @ViewChild('header') header;

  runFun(chlidData) {
    alert(chlidData);
  }

  parentFun(e) {
    console.log(e);
  }

  getChildData() {
    this.header.info='我被父组件改变了'

  }
}
