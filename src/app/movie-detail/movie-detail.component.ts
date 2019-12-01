import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  getMovieFromRouter(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    console.log(`this.router.snapshot.paramMap = ${JSON.stringify(this.router.snapshot.paramMap)}`);
    this.movieService.getMovieFromId(id).subscribe(
      movie => this.movie = movie
    );
  }

  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.getMovieFromRouter();
  }

}
