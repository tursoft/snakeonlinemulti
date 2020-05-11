import { Injectable } from '@angular/core';
import { Client, Room, RoomAvailable } from 'colyseus.js';
import { environment } from 'src/environments/environment';
import { GameInfo } from '../models/GameInfo';

@Injectable({
  providedIn: 'root'
})
export class GameServerService {

  private client: Client = null;
  constructor() { }

  getClient() {
    if (this.client == null) {
      this.client = new Client(environment.serverUrl);
      console.log('client connected!');
    }

    return this.client;
  }

  getGames(searchName: string): Promise<RoomAvailable<any>[]> {
    const client = this.getClient();
    return client.getAvailableRooms(searchName);
  }

  createGame(gameName: string): Promise<Room<GameInfo>> {
    const client = this.getClient();
    return client.join(gameName);
  }

  joinGame(gameName: string): Promise<Room<GameInfo>> {
    const client = this.getClient();
    return client.joinById<GameInfo>(gameName);
  }
}
