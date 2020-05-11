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
      console.log('client connected! client: ', this.client);
    }

    return this.client;
  }

  getGames(searchTerm: string): Promise<RoomAvailable<any>[]> {
    const client = this.getClient();
    console.log('getGames! searchName: ', searchTerm);
    return client.getAvailableRooms(searchTerm);
  }

  createGame(gameName: string): Promise<Room<GameInfo>> {
    const client = this.getClient();
    console.log('createGame! searchName: ', gameName);
    return client.joinOrCreate(gameName);
  }

  joinGame(gameName: string): Promise<Room<GameInfo>> {
    const client = this.getClient();
    console.log('joinGame! searchName: ', gameName);
    return client.joinById<GameInfo>(gameName);
  }
}
