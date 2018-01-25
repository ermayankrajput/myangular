import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
//import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

const API_URL = environment.apiUrl;
@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private handleError (error: Response | any) {
	  console.error('ApiService::handleError', error);
	  return Observable.throw(error);
	}

  public getAllTodos(){
	  return this.http
	    .get(API_URL + '/wp-json/wp/v2/posts?per_page=100')
	    .map(response => {
	      const todos = response.json();
	      return todos;
	    });
	    //.catch(this.handleError);
	}

  public getPostById(Id: string) {
    return this.http
	    .get(API_URL + '/wp-json/wp/v2/posts/?slug=' + Id)
	    .map(response => {
	      const todo = response.json();
	      return todo;
	    });
  }

}
