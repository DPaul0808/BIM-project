import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieList } from 'src/app/models/movie/movie-list.mode';
import { Movie } from 'src/app/models/movie/movie.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  searchValue: string;
  
  favoriteMoviesIDs: string[] = ['tt0120737', 'tt1392214', 'tt1392190', 'tt0268978', 'tt0361748'];
  favoriteMovies: Movie[] = [];
  result: MovieList;

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.favoriteMoviesIDs.forEach((value) => {
      this.http.get<Movie>('http://www.omdbapi.com/?apikey=109ae1cc&i=' + value)
      .subscribe((response: Movie) =>{
          this.favoriteMovies.push(response)
          }
        )
    })
  }

  searchMovie(){
    if(this.searchValue){
      this.router.navigate(["search/" + this.searchValue + '/1'])
    }
  }

  goToMovie(imdbID: string){
    this.router.navigate(["movie/" + imdbID]);
    window.scroll(0,0);
  }
}
