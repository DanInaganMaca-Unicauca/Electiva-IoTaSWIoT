import { PlayerEntity } from "../../domain/entities/players.entity"; 

export interface PlayerRepository { 
    findAll(): Promise<any>; 
    create(player: PlayerEntity): Promise<any>; 
    modify(index: string, player: PlayerEntity): Promise<any>; 
    delete(index: string): Promise<any>; 
}
