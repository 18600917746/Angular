import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NewsComponent} from './components/news/news.component';
import {FormsComponent} from './components/forms/forms.component';
import {EventsComponent} from './components/events/events.component';
import {TodolistComponent} from './components/todolist/todolist.component';
import {GetPostJsonpComponent} from './components/get-post-jsonp/get-post-jsonp.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent

  }, {
    path: 'forms',
    component: FormsComponent

  }, {
    path: 'todolist/:id',
    component: TodolistComponent

  }, {
    path: 'get-post-jsonp',
    component: GetPostJsonpComponent

  }, {
    path: 'news',
    component: NewsComponent

  },
  {
    path: '**',
    redirectTo: 'events',
    pathMatch: 'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
