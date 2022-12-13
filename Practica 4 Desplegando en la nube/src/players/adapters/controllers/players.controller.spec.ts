import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from './players.controller'; 
import { PlayerService } from '../../domain/services/player.service';
//import { PlayerService } from '../../domain/services/player_D.service';


describe('AppController', () => {
  let appController: PlayerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [PlayerService],
    }).compile();

    appController = app.get<PlayerController>(PlayerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
