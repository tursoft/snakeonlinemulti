import { Schema, MapSchema, type } from "@colyseus/schema";
import { Player } from "./player";

export class GameState extends Schema {
    @type({ map: Player })
    players = new MapSchema<Player>();
  
    getPlayer(sessionId: string): Player {
      return this.players[sessionId];
    }
  }