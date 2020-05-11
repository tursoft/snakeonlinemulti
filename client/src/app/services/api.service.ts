import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameStatusEnum, GameInfo } from '../models/GameInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
    this.games = [];
    for (let i = 1; i <= 10; i++) {
      this.games.push(
        {
          gameId: `${i}`, gameName: `Game ${i}`,
          status: GameStatusEnum.waitingForUsers,
          startDate: new Date(),
          endDate: null,

          gameCanvas: {
            bgColor: 'black',
            gridSize: 20,
            width: 15,
            height: 20,
            targetBoxes: [
              {
                box: { x: 5, y: 5, color: 'orange' },
                score: 1
              }
            ],
            players: [
              { userId: '1', username: 'tursoft', head: { x: 1, y: 1, color: 'orange' }, boxes: [], score: 1, lives: 3 },
              { userId: '2', username: 'mtursak', head: { x: 1, y: 1, color: 'orange' }, boxes: [], score: 1, lives: 3 }
            ],
          }
        }
      );
    }
  }

  games: GameInfo[] = [];

  getGameList(): Observable<GameInfo[]> {
    const subject = new Subject<GameInfo[]>();
    setTimeout(() => {
      subject.next(this.games);
      subject.complete();
    }, 4000);
    return subject;
  }
}
