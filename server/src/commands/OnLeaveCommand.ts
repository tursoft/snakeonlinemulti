import { Command } from "@colyseus/command";
import { GameState } from "../game/gameState";
import { CommandArg } from "./models/CommandArg";

export class OnLeaveCommand extends Command<GameState, CommandArg<void>> {
  execute(args: CommandArg<void>) {
    const sessionId = args.client.sessionId;
    delete this.state.players[sessionId];
  }
}