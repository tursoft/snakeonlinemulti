import { Command } from "@colyseus/command";
import { GameState } from "../game/gameState";
import { MoveCommandArg, MoveDirectionEnum } from "./models/MoveCommandArg";
import { CommandArg } from "./models/CommandArg";

export class MoveCommand extends Command<GameState, CommandArg<MoveCommandArg>> {  
  execute(args: CommandArg<MoveCommandArg>) {
    const sessionId = args.client.sessionId;
    const player = this.state.getPlayer(sessionId);

    switch(args.data.direction) {
      case MoveDirectionEnum.left:
        player.x -=1;
        break;

      case MoveDirectionEnum.right:
        player.x +=1;
        break;

      case MoveDirectionEnum.up:
        player.y -=1;
        break;

      case MoveDirectionEnum.down:
        player.y +=1;
        break;
    }
  }
}