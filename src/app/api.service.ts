import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from "@angular/http"
import { RouterModule, Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Title, Meta }     from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
//import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

const API_URL = environment.apiUrl;
@Injectable()
export class ApiService implements Resolve<any>{
  posts: any;
  constructor(private http: Http, private titleService: Title, private meta: Meta ) { }

  //Resolver using https://codeburst.io/understanding-resolvers-in-angular-736e9db71267
  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot):Observable<any>{
  	//console.log('Logging In X');
    if(!this.posts){
      this.posts = this.http.get(API_URL + 'wp-json/wp/v2/posts?per_page=100');
    }
  	return this.posts;
  }

  private handleError (error: Response | any) {
	  console.error('ApiService::handleError', error);
	  return Observable.throw(error);
	}

  public getstaticdata(){

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
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  public setDesc( newDesc: string) {
    this.meta.updateTag({ name: 'description', content: newDesc });
  }

}
@Injectable()
export class singleApiService implements Resolve<any>{
  constructor(private http: Http) { }
  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot):Observable<any>{
  	//console.log(route);
  	return this.http.get(API_URL + '/wp-json/wp/v2/posts/?slug=' + route.params.id);
  }
}