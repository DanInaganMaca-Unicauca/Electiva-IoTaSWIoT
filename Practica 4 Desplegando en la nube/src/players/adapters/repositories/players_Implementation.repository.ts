import { Injectable } from '@nestjs/common';
import { PlayerRepository } from './players.repository';
import { Deta } from 'deta';
import { v4 as uuidv4 } from 'uuid';

const deta = Deta('b0y5eo5t_x6h2kvbcQss24X6yC8uyyuxLZ3KMSi3N');
const db = deta.Base('players');

@Injectable()
export class PlayerRepository_Implementation implements PlayerRepository {
  async findAll(): Promise<any> {
    return db.fetch();
  }

  async create(player: any) {
    return db.put(player, uuidv4());
  }

  async modify(index: string, player: any) {
    return db.put(player, index);
  }

  async delete(id: string) {
    return db.delete(id);
  }
}