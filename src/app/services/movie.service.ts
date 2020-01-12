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
  private movieUrl: string;
  private extensionUrl: string;
  private finalUrl: string;
  private searchUrl: string;

  constructor(private http: HttpClient) {
  }

  loadMovies(page): Observable<object> {
    this.extensionUrl = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page;
    this.finalUrl = this.baseUrl + environment.api_key + this.extensionUrl;
    return this.http.get<object>(this.finalUrl);
  }

  getMovieById(id): Observable<Movie> {
    this.movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.api_key}&language=en-US`;
    return this.http.get<Movie>(this.movieUrl);
  }

  searchMovies(query): Observable<object> {
    this.searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
      + environment.api_key
      + `&language=en-US&query=${query}&page=1&include_adult=false`;
    return this.http.get<object>(this.searchUrl);
  }
}
