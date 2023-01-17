import { Inject, Injectable } from '@nestjs/common';
//import { Player } from "../models/player.model"; // Importamos el modelo de jugador 

import { PlayerRepository } from '../../adapters/repositories/players.repository';
import { InsertResult, UpdateResult } from 'typeorm'; 
import { PlayerEntity } from '../entities/players.entity'; 
import { PlayerService } from './player.service'; 



@Injectable()
export class  PlayerService_Implementation implements PlayerService {

  @Inject('PlayerRepository') private readonly repository: PlayerRepository;

/*  private player: PlayerE[] = [ // Como no hay base de datos aun empleamos una variable en memoria:
    {
      name: 'Leo',
      lastName: 'Messi',
      age: 35,
      team: 'Argentina'
    },  
    {
      name: 'Cristiano',
      lastName: 'Ronaldo',
      age: 37,
      team: 'Portugal'
    }
  ]; */

  //constructor(@InjectRepository(PlayerEntity) private repository: MongoRepository<PlayerEntity>,) {} 

   /**
    * Retorna la lista de jugadores registrados
    */

  public async list(): Promise<PlayerEntity[]> {
    
    const result = await this.repository.findAll(); 
    return result; 
    //return this.player
  }; 

   /**
    * Crea un nuevo jugador
    * @param player datos del nuevo jugador
    * @return Nuevo jugador
    */

/*  public create(player: Player): Player {
    this.player.push(player); 
    return player; */
  public async create(playerData: PlayerEntity): Promise<InsertResult> {
    const newPlayer = await this.repository.create(playerData);
    return newPlayer;
  };

   /**
    * Actualiza datos de jugador
    * @param index Identificador único del jugador
    * @param player datos del jugador
    * @return Jugador modificado
    */
/*  public modify(index: number, player: Player): Player { 
    this.player[index] = player; 
    return this.player[index]; 
  }; */ 
  public async modify(id: string,playerData: PlayerEntity,): Promise<UpdateResult> { 
    const updatedPlayer = await this.repository.modify(id, playerData);
    return updatedPlayer;
  }

   /**
    * Eliminar un jugador
    * @param index Identificador único del jugador
    * @return True si eliminó al jugador
    */
/*  public delete(indexI: number): boolean { 
    const previousNumberPlayers = this.player.length; 
    this.player = this.player.filter((val, index) => index != indexI);
    if(previousNumberPlayers == this.player.length){ 
      return false; 
   } 
   else{ 
      return true;
   } 
  }; */ 
  public async delete(id: string): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

   /**
    * Cambia la edad de un jugador
    * @param index Identificador único del jugador
    * @param age nuevo valor de edad 
    */
/*  public updatePlayerAge(index: number, age: number): Player { 
    this.player[index].age = age; 
    return this.player[index]; 
  }; */ 
/*  public async updateAge(id: number, edad: number): Promise<UpdateResult> {
    const updatedPlayer = await this.repository.update(id, { age: edad });
    return updatedPlayer;
  }*/
} 

