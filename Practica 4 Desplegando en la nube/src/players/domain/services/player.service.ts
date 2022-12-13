import { Injectable } from '@nestjs/common';
import { Player } from "../models/player.model"; // Importamos el modelo de jugador 


@Injectable()
export class  PlayerService {

  private player: Player[] = [ // Como no hay base de datos aun empleamos una variable en memoria:
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
  ]; 

   /**
    * Retorna la lista de jugadores registrados
    */

  public list(): Player[] {
    return this.player
  }; 

   /**
    * Crea un nuevo jugador
    * @param player datos del nuevo jugador
    * @return Nuevo jugador
    */

  public create(player: Player): Player {
    this.player.push(player); 
    return player; 
  };

   /**
    * Actualiza datos de jugador
    * @param index Identificador único del jugador
    * @param player datos del jugador
    * @return Jugador modificado
    */

  public modify(index: number, player: Player): Player { 
    this.player[index] = player; 
    return this.player[index]; 
  }; 

   /**
    * Eliminar un jugador
    * @param index Identificador único del jugador
    * @return True si eliminó al jugador
    */

  public delete(indexI: number): boolean { 
    const previousNumberPlayers = this.player.length; 
    this.player = this.player.filter((val, index) => index != indexI);
    if(previousNumberPlayers == this.player.length){ 
      return false; 
   } 
   else{ 
      return true;
   } 
  }; 

   /**
    * Cambia la edad de un jugador
    * @param index Identificador único del jugador
    * @param age nuevo valor de edad 
    */
  public updatePlayerAge(index: number, age: number): Player { 
    this.player[index].age = age; 
    return this.player[index]; 
  }; 
}
