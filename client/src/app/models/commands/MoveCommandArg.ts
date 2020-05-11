export enum MoveDirectionEnum {
    left = 1,
    right = 2,
    up = 3,
    down = 4
}

export interface MoveCommandArg {
    direction: MoveDirectionEnum;
}
