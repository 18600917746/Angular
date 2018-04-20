import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  //定义属性 方式 1
  protected id: string = 'id1';
  protected title: string = '这是数据';


  protected h: string = `<h2>这是 html 结构</h2>`;

  protected arr = ['a', 'b', 'c', 'd'];

  protected obj = {
    'name': 'cheng',
    'age': 24,
    'sex': '男'
  };


  // typescript 定义方式
  str: string;
  //TODO: 修饰符的类别
  // public 共有的 可以在类的外面使用
  // protected  保护的 只能在当前类，以及他的子类中使用
  // private  私有的 只能在当前类中使用
  //TODO: 属性的类别
  // Str: string;
  // Any: any;
  // Number: number;
  // Null: null;
  // Bool:boolean;
  // Obj:object;


  constructor( protected  ActivatedRoute:ActivatedRoute) {
    this.str = '这是第二种定义方式';
  }

  ngOnInit() {
    //获取路由中的 get 传参
    this.ActivatedRoute.queryParams.subscribe(function (data) {
      console.log(data);
    })
  }

}
