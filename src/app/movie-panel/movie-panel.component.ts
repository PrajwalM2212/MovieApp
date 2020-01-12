import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-movie-panel',
  templateUrl: './movie-panel.component.html',
  styleUrls: ['./movie-panel.component.css']
})
export class MoviePanelComponent implements OnInit {

  movies: Movie[];
  imgUrl = 'https://image.tmdb.org/t/p/w300/';
  page = 1;
  searchQuery =  '';
  isSearching = false;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.loadMovies(this.page).subscribe((data) => {
      // @ts-ignore
      this.movies = data.results;
      this.page += 1;
    });
  }

  loadNext() {
    this.movieService.loadMovies(this.page).subscribe((data) => {
      // @ts-ignore
      this.movies.push(...data.results);
      this.page++;
    });
  }

  search() {
    this.isSearching = true;
    this.movieService.searchMovies(this.searchQuery).subscribe((data) => {
      // @ts-ignore
      this.movies = data.results;
    });
  }
}
