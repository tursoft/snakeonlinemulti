import { PlayerInfo, TargetBoxInfo } from './PlayerInfo';

export enum GameStatusEnum {
    waitingForUsers = 1,
    paused = 2,
    running = 3,
    gameover = 4
}

export interface GameInfo {
    gameId: string;
    gameName: string;
    status: GameStatusEnum;
    startDate: Date;
    endDate: Date | null;

    gameCanvas: GameCanvasInfo;
}

export interface GameCanvasInfo {
    width: number;
    height: number;
    gridSize: number;
    bgColor: string;

    players: PlayerInfo[];
    targetBoxes: TargetBoxInfo[];
}
