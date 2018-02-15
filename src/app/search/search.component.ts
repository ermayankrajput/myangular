import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { RouterModule, Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  sub: any;
  search: string;
  myParams: any;
  projects: any;
  constructor(private _apiService: ApiService, private actr: ActivatedRoute) {
  	//console.log(actr.queryParams._value.s);
  	//this.search = actr.queryParams._value.s;
  	this.actr.data.map(data => data.cres.json() ).subscribe((posts) => {
      this.projects = posts;
      //console.log(posts);
      this._apiService.setTitle("Search | Mozambique Travel");
      this._apiService.setDesc("Important News About Mozambique, Mozambique Travel Blog");
    });
  }

  ngOnInit() {
  	// this.sub = this.actr.params.subscribe(params => {
   //     this.search = params['s'];
   //     console.log(this.search)
   //  });
  }

}
