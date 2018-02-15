import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Resolve } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { Title, Meta }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService, singleApiService } from './api.service';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    PostComponent,
    PostsComponent,
    SearchComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([
      {path: 'post/:id', component: PostComponent, resolve:{cres: singleApiService}},
      {path: '', component: PostsComponent, resolve:{cres: ApiService}},
      {path:'search', component:SearchComponent, resolve:{cres: ApiService}},
      {path:'**', component:Error404Component}
      ]),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, singleApiService, Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
