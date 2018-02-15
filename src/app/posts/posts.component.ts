import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  projects: any;
  constructor(private _apiService: ApiService, private actr: ActivatedRoute) {
    this.actr.data.map(data => data.cres.json() ).subscribe((posts) => {
      this.projects = posts;
      //console.log(posts);
      this._apiService.setTitle("Blog Mozambique Travel");
      this._apiService.setDesc("Important News About Mozambique, Mozambique Travel Blog");
    });
  };
  //private _apiService: ApiService
  //public users$: Observable<ApiService>
  ngOnInit() {
    // this._apiService.getAllTodos().subscribe(data => {
    //   	this.projects = data;
    //   	//console.log(data);
    //     this._apiService.setTitle("Blog Mozambique Travel");
    //     this._apiService.setDesc("Important News About Mozambique, Mozambique Travel Blog");
    // });
  }

}
