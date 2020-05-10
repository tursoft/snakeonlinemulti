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
    users: UserInfo[];
    targetBoxes: TargetBoxInfo[];
}

export interface UserInfo {
    userId: string;
    username: string;
}

export interface UserGameInfo {
    userId: string;
    head: BoxInfo;
    boxes: BoxInfo[];
    lives: number;
    score: number;
}

export interface BoxInfo {
    x: number;
    y: number;
    color: string;
}

export interface TargetBoxInfo {
    box: BoxInfo;
    score: number;
}

export interface GameCanvasInfo {
    width: number;
    height: number;
    gridSize: number;
    bgColor: string;
}
