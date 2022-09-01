import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieList } from 'src/app/models/movie/movie-list.mode';
import { Movie } from 'src/app/models/movie/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  result: MovieList;
  searchValue: string;
  currentPage: number;
  numberOfPages: number;

  public endpointURL = "http://www.omdbapi.com/?apikey=109ae1cc";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.route.params.subscribe(params => {
      this.http.get<MovieList>(this.endpointURL + "&s=" + params.searchValue + "&page=" + params.page)
      .subscribe((response: MovieList) =>{
          this.result = response;
          this.movies = this.result.Search;
          this.currentPage = params.page;
          this.searchValue = params.searchValue;
          this.numberOfPages = Math.floor(this.result.totalResults / 10) + 1
          console.log(this.result.Error)
          }
        )
      }
    )
  }

  onNextClick(){
    this.currentPage++;
    this.getMovies();
    window.scroll(0,0);
    this.router.navigate(["search/" + this.searchValue + "/" + this.currentPage]);
  }

  onPreviousClick(){
    this.currentPage--;
    this.getMovies();
    window.scroll(0,0);
    this.router.navigate(["search/" + this.searchValue + "/" + this.currentPage]);
  }

  goToMovie(imdbID: string){
    this.router.navigate(["movie/" + imdbID]);
  }

}
