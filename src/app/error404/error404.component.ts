import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private _apiService: ApiService) { 
  	this._apiService.setTitle("Error 404");
    this._apiService.setDesc("Important News About Mozambique, Mozambique Travel Blog");
  }

  ngOnInit() {
  }

}
