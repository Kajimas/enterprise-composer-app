/*
Title: composer.service.ts
Author: William Egge
Date: 15 June 2023
Description: composer service.
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      { composerId: 101, fullName: 'Ludwig van Beethoven', genre: 'Classical' },
      { composerId: 102, fullName: 'Johann Sebastian Bach', genre: 'Baroque' },
      { composerId: 103, fullName: 'George Frideric Handel', genre: 'Baroque' },
      {
        composerId: 104,
        fullName: 'Pyotr Ilyich Tchaikovsky',
        genre: 'Romantic',
      },
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number): IComposer {
    let foundComposer: IComposer;
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        foundComposer = composer;
        break;
      }
    }
    return foundComposer;
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
        map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1))
    );
}

}
