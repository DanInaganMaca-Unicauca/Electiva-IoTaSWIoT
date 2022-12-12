//import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common'; 
import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common'; 


import { Player } from '../../domain/models/player.model'; 
import { PlayerService } from '../../domain/services/player.service'; 

// import { PlayerController } from './players.controller'; <---- SOLID 
import { AuthGuard } from '@nestjs/passport'; // Autentication 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; // JWT 

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
    * 
    * Autentification: 
    *   curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"username": "user0", "password": "password0", "name": "Mónica","lastName": "Inagán","age": 19,"team": "Colombia"}' 
    *   curl -X POST http://raspberry:3000/ -H "Content-Type: application/json" -d '{"name": "Mónica","lastName": "Inagán","age": 19,"team": "Colombia"}' --user "user0:password0" 
    * curl -X POST http://raspberry:3000/ 
        -H "Content-Type: application/json" 
        -d '{
                "name": "Mónica",
                "lastName": "Inagán",
                "age": 19,
                "team": "Colombia"
            }' 
        --user "user0:password0" 
    * 
    */
  //@UseGuards(AuthGuard('local')) // End points protegidos con Autentificacion 
  @UseGuards(JwtAuthGuard) // Se adiciona esta anotación para proteger el endpoint con JWT 
  @Post() 
  create(@Body() data: Player) { 
    try{ 
      return this.playerService.create(data);
      //return "\n"+this.playerService.create(data).toString()+"\n\n"; 
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
  @UseGuards(JwtAuthGuard) // Se adiciona esta anotación para proteger el endpoint con JWT 
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
  @UseGuards(JwtAuthGuard) // Se adiciona esta anotación para proteger el endpoint con JWT 
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
  @UseGuards(JwtAuthGuard) // Se adiciona esta anotación para proteger el endpoint con JWT 
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
