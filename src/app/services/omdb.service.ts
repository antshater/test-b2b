import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObdbByIdResponse, OmdbFilm } from '../films/omdb.interfaces';
import { map } from 'rxjs/operators';
import { ObmdbSearchResponse } from '../films/omdb.interfaces';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {

  constructor(private http: HttpClient) {
  }

  search(search: string): Observable<OmdbFilm[]> {
    return this.http.get('/', {params: {s: search}}).pipe(map((response: ObmdbSearchResponse) => {
      if (response.Response === 'False') {
        return [];
      }

      return response.Search.map(film => this.clearFilmAttributes(film));
    }));
  }

  find(imdbId: string): Observable<OmdbFilm | null> {
    return this.http.get('/', {params: {i: imdbId}}).pipe(map((response: ObdbByIdResponse) => {
      if (response.Response === 'False') {
        return null;
      }

      return this.clearFilmAttributes(response);
    }));
  }

  private clearFilmAttributes(film: OmdbFilm): OmdbFilm {
    const filtered = Object.assign({}, film);
    Object.keys(filtered).forEach(attribute => {
      if (filtered[attribute] === 'N/A') {
        filtered[attribute] = null;
      }
    });

    return filtered;
  }
}
