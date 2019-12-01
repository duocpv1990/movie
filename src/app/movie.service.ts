import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


import { fakeMovie } from './fake-movie';
import { Movie } from './models/movie';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieURL="http://localhost:3000/movies";
  

  constructor(
    private http: HttpClient,
    public messageService: MessageService) { }
  
  getMovie(): Observable<Movie[]>  {
    // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovie);
    return this.http.get<Movie[]>(this.movieURL);
  }

  getMovieFromId(id: number): Observable<Movie> {
    const url = `${this.movieURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectMovie => console.log(`selected movie = ${JSON.stringify(selectMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  
}
