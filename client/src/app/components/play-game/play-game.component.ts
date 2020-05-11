import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ComponentContextService } from 'src/app/services/component-context.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'colyseus.js';
import { GameInfo } from 'src/app/models/GameInfo';
import { MoveCommandArg } from 'src/app/models/commands/MoveCommandArg';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent extends BaseComponent  implements OnInit {

  constructor(
    context: ComponentContextService,
    public route: ActivatedRoute) {
    super(context);

    this.route.params.subscribe(params => {
      const gameId = params['gameId'];
      this.createOrJoinGame(gameId);
    });
  }

  room: Room<GameInfo> = null;
  isJoined = false;
  userId = '';

  createOrJoinGame(gameId: string) {
    console.log('createOrJoinGame - gameId: ', gameId);
    this.setBusy('Creating, please wait...');
    this.context.gameServerService.createGame(gameId).then(r => {
      this.setRoom(r);
      this.endBusy();
    })
    .catch(e => this.handleError(e, 'createOrJoinGame'));
  }

  setRoom(room: Room<GameInfo>) {
    console.log('setRoom - room: ', room);

    this.room = room;
    this.userId = this.room.sessionId;
    this.isJoined = true;

    this.room.onStateChange((state) => {
        console.log('onStateChange: ', state);
    });

    this.room.onMessage<MoveCommandArg>('move', (args) => {
      console.log('onMessage - move: ', args);
    });
  }

  leave() {
    this.room.leave(true);
    this.userId = this.room.sessionId;
    this.isJoined = true;
  }

  sendMoveCommand(args: MoveCommandArg) {
    this.room.send('move', args);
  }


  ngOnInit() {
  }

}
