import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
  },
  {
    path: ':imdbId',
    component: FilmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {
}
