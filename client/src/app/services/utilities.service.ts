import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

//   <T>toPromise(Observable<T> observable): Promise<T> {
//      return new Promise<any>((resolve, reject) => {
//       observable.subscribe(results => {
//         resolve(results);
//       },
//       e => this.handleError(e, 'loadData', reject));
//     });
//   }
}
