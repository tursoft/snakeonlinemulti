import { Client } from "colyseus";

export interface CommandArg<TData> {
    client: Client;
    data: TData;
}