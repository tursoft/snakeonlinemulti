import { Command } from "@colyseus/command";

import { GameState } from "../game/GameState";
import { Player } from "../game/Player";
import { CommandArg } from "./models/CommandArg";

export class GetPlayersCommand extends Command<GameState, CommandArg<void>> {
  execute(args: CommandArg<void>) {
    args.client.send('players', { players: this.state.players });
  }
}