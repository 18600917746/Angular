//浏览器解析
import {BrowserModule} from '@angular/platform-browser';
//核心模块
import {NgModule} from '@angular/core';
//双向数据绑定
import {FormsModule} from '@angular/forms';
//http 数据请求
import {HttpModule, JsonpModule} from '@angular/http';

//路由
import {AppRoutingModule} from './app-routing.module';
//服务
import {StorageService} from './services/storage.service';
//页面
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NewsComponent} from './components/news/news.component';
import {FormsComponent} from './components/forms/forms.component';
import {EventsComponent} from './components/events/events.component';
import {TodolistComponent} from './components/todolist/todolist.component';
import {GetPostJsonpComponent} from './components/get-post-jsonp/get-post-jsonp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    FormsComponent,
    EventsComponent,
    TodolistComponent,
    GetPostJsonpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
