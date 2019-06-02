import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbFilm } from '../omdb.interfaces';
import { Subject } from 'rxjs';
import { flatMap, map, takeUntil } from 'rxjs/operators';
import { OmdbService } from '../../services/omdb.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit, OnDestroy {

  film: OmdbFilm;
  parameters: { label: string, value: string }[] = [];

  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private omdbService: OmdbService,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      takeUntil(this.destroy$),
      map(params => params.imdbId),
      flatMap(imdbId => this.omdbService.find(imdbId)),
    ).subscribe(film => {
      this.film = film;
      this.parameters = [
        {label: 'Год', value: this.film.Year},
        {label: 'Награды', value: this.film.Awards},
        {label: 'Актеры', value: this.film.Actors},
        {label: 'Страна', value: this.film.Country},
        {label: 'Режиссер', value: this.film.Director},
        {label: 'Imdb рейтинг', value: this.film.imdbRating},
        {label: 'Язык', value: this.film.Language},
        {label: 'Сюжет', value: this.film.Plot},
      ];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
