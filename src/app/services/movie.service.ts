import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
  extensionUrl = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  finalUrl = this.baseUrl + environment.api_key + this.extensionUrl;
  private movieUrl: string;

  constructor(private http: HttpClient) {
  }

  loadMovies(): Observable<object> {
    return this.http.get<object>(this.finalUrl);
  }

  getMovieById(id): Observable<Movie> {
    this.movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.api_key}&language=en-US`;
    return this.http.get<Movie>(this.movieUrl);
  }
}
