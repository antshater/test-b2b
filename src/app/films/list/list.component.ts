import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { OmdbFilm } from '../omdb.interfaces';
import { debounceTime, flatMap } from 'rxjs/operators';
import { OmdbService } from '../../services/omdb.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FilmsStorageService } from '../services/films-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  searchCtrl = new FormControl('');
  autoComplete$: Observable<OmdbFilm[]>;
  list$: Observable<OmdbFilm[]>;

  constructor(
    private omdbService: OmdbService,
    private filmsStorageService: FilmsStorageService,
  ) {
  }

  ngOnInit() {
    this.autoComplete$ = this.searchCtrl.valueChanges.pipe(
      debounceTime(300),
      flatMap(search => this.omdbService.search(search)),
    );

    this.list$ = this.filmsStorageService.list();
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.searchCtrl.patchValue('', {emitEvent: false});
    this.filmsStorageService.add(event.option.value);
  }

}
