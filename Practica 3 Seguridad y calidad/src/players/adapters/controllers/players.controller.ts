import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common'; 

import {Player} from '../../domain/models/player.model'; 
import { PlayerService } from '../../domain/services/player.service'; 

const errReturn = (e: Error, message: string) => {
  return {
     message: message,
     error: e
  }
}

@Controller() 
export class PlayerController {
  // Constructor 
  constructor(private readonly playerService: PlayerService) {  } 

   /**
    *  Retorna la lista de jugadores
    */
  @Get() 
  listPlayers() {
    try { 
      return this.playerService.list(); 
    } 
    catch(e) {
      return errReturn(e, "Error Player list"); 
    }
  };

   /**
    * Crea un jugador
    * @param datos Objeto con datos de jugador
    */
  @Post() 
  create(@Body() data: Player) { 
    try{ 
      return this.playerService.create(data); 
    } 
    catch(e) { 
      return errReturn(e, "Error User create"); 
    }
  }; 

   /**
    * Modifica datos de un jugador
    * @param data Objeto con datos de jugador
    * @param index Identificador único del jugador
    */
  @Put(":index") 
  modify(@Body() data: Player, @Param('index') index: number) { 
    try { 
      return this.playerService.modify(index, data); 
    } 
    catch(e) {
      return errReturn(e, "Error Player modify"); 
    }
  }; 

   /**
    * Elimina un jugador
    * @param index Identificador único del jugador
    */
  @Delete(":index") 
  delete(@Param('index') index: number) { 
    try { 
      return this.playerService.delete(index); 
    } 
    catch(e) { 
      return errReturn(e, "Error Player delete")
    }
  }; 

   /**
    * Cambia la edad de un jugador
    * @param index Identificador único del jugador
    * @param age Edad del jugador
    */
  @Patch(":index/age/:age") 
  updatePlayerAge(@Param('index') index: number, @Param('age') age: number) { 
    try { 
      return this.playerService.updatePlayerAge(index, age); 
    } 
    catch(e) { 
      return errReturn(e, "Error Player updatePlayerAge"); 
    }
  };

}
