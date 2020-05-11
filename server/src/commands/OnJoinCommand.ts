import { Command } from "@colyseus/command";
import { GameState } from "../game/gameState";
import { Player } from "../game/player";
import { CommandArg } from "./models/CommandArg";

export class OnJoinCommand extends Command<GameState, CommandArg<void>> {
  execute(args: CommandArg<void>) {
    const sessionId = args.client.sessionId;
    this.state.players[sessionId] = new Player();
  }
}