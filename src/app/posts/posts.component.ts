import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  projects: any[] = [];
  constructor(private _apiService: ApiService) {};
  //private _apiService: ApiService
  //public users$: Observable<ApiService>

  ngOnInit() {
    this._apiService.getAllTodos().subscribe(data => {
      	this.projects = data;
      	console.log(data);
    });
  }

}
