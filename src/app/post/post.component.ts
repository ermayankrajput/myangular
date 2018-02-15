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
      this.activeRoute.data.map(data => data.cres.json() ).subscribe((post) => {
      this.project = post;
      //console.log(post);
      this._apiService.setTitle(this.project[0].title.rendered + " | Mozambique Travel");
      this._apiService.setDesc(this.project[0].title.rendered);
      this.button_show = true;
    })
      //console.log(title);
  };
  //private _apiService: ApiService
  //public users$: Observable<ApiService>
  get stateName() {
    return this.show ? 'show' : 'show';
  }
  getfulldata(){
    this.cdata = this.project[0].content.rendered;
    this.button_show = false;
  };
  ngOnInit() {
  	// this.sub = this.activeRoute.params.subscribe(params => {
   //     this.id = params['id']; // (+) converts string 'id' to a number
   //     // In a real app: dispatch action to load the details here.
   //  });
    // this._apiService.getPostById(this.id).subscribe(data => {
    //   	this.project = data;
    //     this.button_show = true;
    //     this._apiService.setTitle(this.project[0].title.rendered);
    //     this._apiService.setDesc(this.project[0].title.rendered);
    // });
  }
  ngAfterViewInit() {
    //var jQuery = require("jquery-easing");
    $(document).ready(function() {
      $("div.gallery_img a").fancyboxPlus();
      $("div.gallery_img a").fancyboxPlus({
        'transitionIn'  :  'elastic',
        'transitionOut'  :  'elastic',
        'speedIn'    :  200,
        'speedOut'    :  200,
        'overlayShow'  :  true
      });
    }
  }

}
