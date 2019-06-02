import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() {
  }

  put(key: string, value: object | object[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): object | object[] {
    return JSON.parse(localStorage.getItem(key));
  }
}
