import { Module } from '@nestjs/common';
/*import { AppController } from './app.controller';
import { AppService } from './app.service';*/

import { PlayerController } from './players/adapters/controllers/players.controller';  
import { PlayerService_Implementation } from './players/domain/services/player_Implementation.service'; 

/*import { PlayerController_D } from './players/adapters/controllers/players_D.controller';  
import { PlayerService_D } from './players/domain/services/player_D.service'; */
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm'; // MongoDB 
import { PlayerRepository_Implementation } from './players/adapters/repositories/players_Implementation.repository'; 

import { PlayerEntity } from './players/domain/entities/players.entity';

@Module({
  //imports: [AuthModule, UsersModule],
  imports: [
    AuthModule,
    UsersModule,
/*    TypeOrmModule.forRoot({
       type: 'mongodb',
       url: 'mongodb+srv://mongodb+srv://Username0:Password0@cluster0.bmul02o.mongodb.net/?retryWrites=true&w=majority',
    }), */
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://mongodb+srv://Username0:Password0@cluster0.bmul02o.mongodb.net/?retryWrites=true&w=majority',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true, // Solo para desarrollo
      logging: true,
      autoLoadEntities: true,
   }),
   TypeOrmModule.forFeature([PlayerEntity])
  ],
  controllers: [PlayerController],
  //providers: [PlayerService], 
  /*controllers: [PlayerController_D],
  providers: [
    { 
      provide: 'PlayerService', 
      useClass: PlayerService_D 
    }
  ],*/
  providers: [
    {
       provide: 'PlayerService',
       useClass: PlayerService_Implementation,
    },
    {
      provide: 'PlayerRepository', 
      useClass: PlayerRepository_Implementation, 
    },
  ],
})

export class AppModule {}
