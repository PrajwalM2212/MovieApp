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

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.loadMovies().subscribe((data) => {
      // @ts-ignore
      this.movies = data.results;
      this.movies.forEach((m) => {
        console.log(m.poster_path);
      });
    });
  }

}
