import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/layout/homepage/homepage.component';
import { DetailedMovieComponent } from './components/movie/detailed-movie/detailed-movie.component';
import { MoviesComponent } from './components/movie/movies/movies.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'search/:searchValue/:page', component: MoviesComponent},
  {path:'movie/:imdbID', component: DetailedMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
