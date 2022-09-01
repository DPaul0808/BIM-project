import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailedMovie } from 'src/app/models/movie/detailed-movie';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html'
})
export class DetailedMovieComponent implements OnInit {

  public endpointURL = "http://www.omdbapi.com/?apikey=109ae1cc";

  movie: DetailedMovie;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){
    this.route.params.subscribe(params => {
      this.http.get<DetailedMovie>(this.endpointURL + "&i=" + params.imdbID)
      .subscribe((response: DetailedMovie) =>{
          this.movie = response;
          }
        )
      }
    )
  }

}
