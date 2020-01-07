import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/Movie';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
  extensionUrl = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  finalUrl = this.baseUrl + environment.api_key + this.extensionUrl;

  constructor(private http: HttpClient) {
  }

  loadMovies(): Observable<object> {
    return this.http.get<object>(this.finalUrl);
  }
}
