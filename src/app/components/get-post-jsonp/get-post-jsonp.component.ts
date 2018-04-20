import {Component, OnInit} from '@angular/core';
import {Http, Jsonp, Headers} from '@angular/http';

@Component({
  selector: 'app-get-post-jsonp',
  templateUrl: './get-post-jsonp.component.html',
  styleUrls: ['./get-post-jsonp.component.css']
})
export class GetPostJsonpComponent implements OnInit {
  constructor(protected http: Http, protected jsonp: Jsonp) {
  }

  ngOnInit() {

  }

  getData() {

  }

  postData() {

  }

  jsonpData() {

  }

}
