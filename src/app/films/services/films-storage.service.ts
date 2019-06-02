import { Injectable } from '@angular/core';
import { OmdbFilm } from '../omdb.interfaces';
import { StorageService } from '../../services/storage.service';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilmsStorageService {

  private collectionKey = 'films-collection';
  private collectionChange$ = new Subject<OmdbFilm[]>();

  constructor(private storageService: StorageService) {
  }

  add(film: OmdbFilm) {
    const list = this.getList();
    list.unshift(film);
    this.storageService.put(this.collectionKey, list);
    this.collectionChange$.next(list);
  }

  list(): Observable<OmdbFilm[]> {
    return this.collectionChange$.pipe(startWith(this.getList()));
  }

  private getList(): OmdbFilm[] {
    return (this.storageService.get(this.collectionKey) || []) as OmdbFilm[];
  }
}
