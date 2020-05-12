import { Command } from "@colyseus/command";

import { GameState } from "../game/GameState";
import { Player } from "../game/Player";
import { CommandArg } from "./models/CommandArg";

export class OnJoinCommand extends Command<GameState, CommandArg<void>> {
  execute(args: CommandArg<void>) {
    const sessionId = args.client.sessionId;
    this.state.players[sessionId] = new Player();
  }
}