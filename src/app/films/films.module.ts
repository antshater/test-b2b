import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { ListComponent } from './list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [ListComponent, FilmComponent],
  imports: [
    CommonModule,

    FilmsRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
})
export class FilmsModule {
}
