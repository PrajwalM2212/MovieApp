import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviePanelComponent} from './movie-panel/movie-panel.component';
import {MovieComponent} from './movie/movie.component';


const routes: Routes = [
  {
    path: '',
    component: MoviePanelComponent
  },
  {
    path: 'movies/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
