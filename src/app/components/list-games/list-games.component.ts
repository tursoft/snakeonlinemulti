import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ComponentContextService } from '../base/component-context.service';
import { GameInfo } from 'src/app/models/gameModels';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent extends BaseComponent implements OnInit {

  public games: GameInfo[] = [];

  constructor(context: ComponentContextService) {
    super(context);
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): Promise<any> {
    this.setBusy('Loading, please wait...');
    return new Promise<any>((resolve, reject) => {
      this.context.apiService.getGameList().subscribe(games => {
        this.games = games;
        this.endBusy();
        resolve();
      },
      e => this.handleError(e, 'loadData', reject));
    });
  }
}
