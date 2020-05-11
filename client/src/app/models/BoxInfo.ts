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
