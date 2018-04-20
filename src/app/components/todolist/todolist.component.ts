import {Component, OnInit} from '@angular/core';

import {StorageService} from '../../services/storage.service';

import {Router, ActivatedRoute,NavigationExtras,Params} from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public input: any = '';
  protected list = [];
  protected wcList = [];

  //依赖注入服务
  constructor(private storage: StorageService, protected Activatedroute:ActivatedRoute, protected router:Router) {
    this.storage.setCookit('chengpanpan', 'qqq', 10);
  }


  ngOnInit() {
    this.Activatedroute.params.subscribe(function (data) {
      console.log(data);
    })
  }


  dleList(key) {
    this.list.splice(key, 1);
  }

  keyAddList(e) {
    if (this.input) {
      var obj = {
        name: this.input,
        status: false
      };
      if (e.keyCode == 13) {
        this.list.push(obj);
        this.input = '';
      }
    }
  }

  chenge(key) {
    if (this.list[key].status) {
      this.wcList.push(this.list[key]);
      this.list.splice(key, 1);
    }
  }
  //编程式路由跳转
  routerNavigate(){
    this.router.navigate(['/news'])
    //第二个参数就是动态的额路由
    // this.router.navigate(['/news','12312'])
  }
  //编程式GET传参路由跳转
  routerNavigateGet(){
    let NavigationExtras:NavigationExtras={
      queryParams:{
        "name":'1213'
      },
      fragment:'maodian' //这是跳转以后的锚点
    };
    this.router.navigate(['/news'],NavigationExtras);
  }

}
