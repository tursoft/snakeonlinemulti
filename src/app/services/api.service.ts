import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameInfo, GameStatusEnum } from 'src/app/models/gameModels';

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
          targetBoxes: [
            {
              box: { x: 5, y: 5, color: 'orange' },
              score: 1
            }
          ],
          users: [
            { userId: '1', username: 'tursoft' },
            { userId: '2', username: 'mtursak' }
          ],
          gameCanvas: {
            bgColor: 'black',
            gridSize: 20,
            width: 15,
            height: 20
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
