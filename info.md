# 本地安装环境
    1.npm install -g @angular/cli
# 创建一个 angular4.x 项目
    1.ng new myAngular 
# 启动服务
    1.cd my-app
      ng serve --open
# 创建 组件
    1.ng g component cpmponents/ 
# 创建 服务
    使用指令注入 --module=app 表示在 app.app.module 自动添加依赖
    1.ng g service  services/  --module=app
    2.在要使用 服务 的组件内引入服务
      import {StorageService} from '../../services/storage.service';
    3.并在 constructor() 中注入服务
    constructor(private storage:StorageService) {
        storage.setCookit('chengpanpan','123123',10);
    }
# 双向绑定
    1.需要引入 FormsModule
    import { FormsModule } from '@angular/forms';
# 数据交互
    1.引入 依赖 app.module
    import {HttpModule, JsonpModule} from '@angular/http';
    2.依赖注入 app.module
    imports: [
        HttpModule,
        JsonpModule
      ]
# 父组件主动向子组件传参-传方法 @Input()
    1.父组件
    <app-header [title]="title"></app-header>
    2.子组件内
    import {Component, OnInit, Input} from '@angular/core';
    @Input() title: any;
# 子组件主动向父组件传递 数据 @Input() @Output()
    1.使用 父组件向下传递方法的 子组件回调父组件的方法
    2.使用官方的 @Output 方法
      子组件需要引入 Input Output EventEmitter 模块
# 父组件主动获取子组件的数据，方法 @ViewChild
    1. 获取方法
      ①先在引用处定义名称
     <app-header #chlid></app-header>
      ②父组件进行执行
     <button type="button" (click)="chlid.chlidFun()">父组件主动执行子组件的方法</button>
# 路由
    1.创建下项目的时候就添加路由配置
      ng new myAngular --routing
    2.使用命令进行创建 --flat 创建到 src/app 下，不是一个单独的目录 --module=app 自动进行依赖注入
      ① 创建文件
      ng g module app-routing --flat --module=app
      ② 依赖引入 app-routing.module.ts
      import { RouterModule, Routes } from '@angular/router';
      ③依赖注入 app-routing.module.ts
      exports: [ RouterModule ]
      ④ 组件引用
      import { HeroesComponent }      from './heroes/heroes.component';
      ⑤ 路由编写
      const routes: Routes = [
        { path: 'heroes', component: HeroesComponent }
      ];
      ⑥ 依赖导出
      imports: [ RouterModule.forRoot(routes) ],
      ⑦ 路由入口
      <a routerLink="/heroes">Heroes</a>
      ⑧ 路由出口
      <router-outlet></router-outlet>
      ⑨ 路由选中样式
        <a routerLink="/heroes" >Heroes</a>
      ⑩ 动态路由 
        <a routerLink="/heroes/1">Heroes</a>
        路由路径填写
       {
          path: 'todolist/:id',
          component: TodolistComponent
      
        }
        1.引入依赖
        import { ActivatedRoute} from '@angular/router';
        2.依赖注入
         constructor(protected ActivatedRoute:ActivatedRoute) {
          }
        3.动态路由的参数接收
          ngOnInit() {
            this.ActivatedRoute.params.subscribe(function (data) {
              console.log(data);
            })
          }
      2.编程式路由
        1.引入依赖
         import { Router } from '@angular/router';
        2.依赖注入
             constructor(protected router:Router) {
              }
        3.事件驱动 
          routerNavigate(){
              this.router.navigate(['/news'])
            }
           编程式动态路由跳转
          routerNavigate(){
               this.router.navigate(['/news','121'])
            }
          编程式动态GET传参路由跳转
          1.引入依赖
          import {NavigationExtras} from '@angular/router';
          2.不需要在 constructor(){} 中注入依赖
          3.跳转方式
          routerNavigateGet(){
              let NavigationExtras:NavigationExtras={
                queryParams:{
                  "name":'1213'
                },
                fragment:'maodian' //这是跳转以后的锚点
              };
              this.router.navigate(['/news'],NavigationExtras);
            }
           4.路由参数接收
             1.引入依赖
                   import { ActivatedRoute} from '@angular/router';
                   2.依赖注入
                    constructor(protected ActivatedRoute:ActivatedRoute) {
                     }
                   3.动态路由的参数接收
                     ngOnInit() {
                       this.ActivatedRoute.queryParams.subscribe(function (data) {
                         console.log(data);
                       })
                     }
