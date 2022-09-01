import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomepageComponent } from './components/layout/homepage/homepage.component';
import { MoviesComponent } from './components/movie/movies/movies.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DetailedMovieComponent } from './components/movie/detailed-movie/detailed-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MoviesComponent,
    FooterComponent,
    DetailedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
