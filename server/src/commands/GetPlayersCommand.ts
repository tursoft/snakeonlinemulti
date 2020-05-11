import { Command } from "@colyseus/command";
import { GameState } from "../game/gameState";
import { Player } from "../game/player";
import { CommandArg } from "./models/CommandArg";

export class GetPlayersCommand extends Command<GameState, CommandArg<void>> {
  execute(args: CommandArg<void>) {
    args.client.send('players', { players: this.state.players });
  }
}