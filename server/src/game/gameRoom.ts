import { Room, Client } from "colyseus";
import { Dispatcher, Command } from "@colyseus/command";

import { GameState } from "./GameState";
import { Player } from "./Player";
import { OnJoinCommand } from "../commands/OnJoinCommand";
import { OnLeaveCommand } from "../commands/OnLeaveCommand";
import { MoveCommand } from "../commands/MoveCommand";
import { GetPlayersCommand } from "../commands/GetPlayersCommand";
import { CommandArg } from "../commands/models/CommandArg";
import { MoveCommandArg } from "../commands/models/MoveCommandArg";

export class GameRoom extends Room<GameState> {
  dispatcher = new Dispatcher(this);
  
  onCreate (options: any) {

    console.log("onCreate");
    // initialize empty room state
    this.setState(new GameState());

    this.onMessage("move", (client, data: MoveCommandArg) => {
      this.dispatch(client, new MoveCommand(), data);
    });

    this.onMessage("getPlayers", (client, data) => {
      this.dispatch(client, new GetPlayersCommand(), data);
    });
  }

  // Authorize client based on provided options before WebSocket handshake is complete
  // onAuth (client: Client, options: any, request: http.IncomingMessage) {

  // }

  onJoin (client: Client, options: any) {
    this.dispatch(client, new OnJoinCommand(), null);
  }

  onLeave (client: Client, consented: boolean) {
    this.dispatch(client, new OnLeaveCommand(), null);
  }

  onDispose() {
    console.log("onDispose");
  }

  dispatch<TCommand extends Command<GameState, CommandArg<TData>>, TData>(client: Client, cmd: TCommand, data: TData) {    
    const sessionId = client.sessionId;
    this.dispatcher.dispatch(cmd, { client, data });
    const cmdName = typeof(cmd); //  nameof(cmd);
    console.log(`[${cmdName}]-${sessionId}: ${ JSON.stringify(data) }`);
  }
}
