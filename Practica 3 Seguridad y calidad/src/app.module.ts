import { Module } from '@nestjs/common';
/*import { AppController } from './app.controller';
import { AppService } from './app.service';*/

import { PlayerController } from './players/adapters/controllers/players.controller';  
import { PlayerService } from './players/domain/services/player.service'; 

/*import { PlayerController_D } from './players/adapters/controllers/players_D.controller';  
import { PlayerService_D } from './players/domain/services/player_D.service'; */

@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [PlayerService], 
  /*controllers: [PlayerController_D],
  providers: [
    { 
      provide: 'PlayerService', 
      useClass: PlayerService_D 
    }
  ],*/
})

export class AppModule {}
