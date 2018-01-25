import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { trigger,state,style,animate,transition,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  show = false;
  project: any[];
  id: string;
  sub: any;
  cdata: any;
  button_show: any;
  constructor(private _apiService: ApiService, private activeRoute: ActivatedRoute, meta: Meta, title: Title) {
      // Sets the <title></title>
      title.setTitle("My Blog Post");
      //console.log(title);
  };
  //private _apiService: ApiService
  //public users$: Observable<ApiService>
  get stateName() {
    return this.show ? 'show' : 'show'
  }
  getfulldata(){
    this.cdata = this.project[0].content.rendered;
    this.button_show = false;
  };
  ngOnInit() {
  	this.sub = this.activeRoute.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
    this._apiService.getPostById(this.id).subscribe(data => {
      	this.project = data;
        this.button_show = true;
      	console.log(this.project);
    });
  }

}
