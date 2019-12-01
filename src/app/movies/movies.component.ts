import { Component, OnInit } from '@angular/core';

import { Movie } from '../models/movie';
//import { fakeMovie } from '../fake-movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // movie: Movie = {
  //   id: 1,
  //   name: "Strar War",
  //   releaseYear: 1977
  // }

  //movies = fakeMovie;
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  getMoviesFromServices(): void {
    //this.movies = this.movieService.getMovie();
    this.movieService.getMovie().subscribe(
      (updateMovies) => {
        this.movies = updateMovies;
        console.log(`this.movies = ${JSON.stringify(this.movies)}`);
      }
    );
  }

  ngOnInit() {
    this.getMoviesFromServices();
  }

  // selectedMovie: Movie;
  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`${JSON.stringify(this.selectedMovie)}`);
  // }

}
