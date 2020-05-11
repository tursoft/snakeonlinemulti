import { Component, OnInit } from '@angular/core';
import { from } from 'linq-to-typescript';
import { Client, Room, RoomAvailable } from 'colyseus.js';

import { BaseComponent } from '../base/base.component';
import { ComponentContextService } from 'src/app/services/component-context.service';
import { GameInfo } from 'src/app/models/GameInfo';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent extends BaseComponent implements OnInit {

  public games: RoomAvailable<GameInfo>[] = [];
  public searchText = '';

  constructor(context: ComponentContextService) {
    super(context);
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): Promise<any> {
    this.setBusy('Loading, please wait...');
    return new Promise<any>((resolve, reject) => {
      this.context.gameServerService.getGames(this.searchText).then(games => {
        this.games = games;
        this.endBusy();
        resolve();
      },
      e => this.handleError(e, 'loadData', reject));
    });
  }

  join(gameId: string = ''): Promise<any> {
    if (gameId == null || gameId == undefined || gameId == '') {
      gameId = this.searchText;
    }

    this.setBusy('Joinning, please wait...');
    return new Promise<any>((resolve, reject) => {
        this.context.router.navigate(['/play', gameId]);
        // this.context.gameServerService.createGame(this.searchText).then(game => {
        //   this.games = games;
        //   this.endBusy();
        //   resolve();
      // },
      // e => this.handleError(e, 'loadData', reject));
    });
  }
}
