import { InsertResult, UpdateResult } from 'typeorm';
import { PlayerEntity } from '../entities/players.entity'; 

export interface PlayerService {
  /**
   * Retorna la lista de jugadores registrados
   */
  list(): Promise<PlayerEntity[]>;

  /**
   * Crea un nuevo jugador
   * @param player datos del nuevo jugador
   * @return Resultado del proceso
   */
  create(player: PlayerEntity): Promise<InsertResult>;

  /**
   * Actualiza datos de jugador
   * @param id Identificador único del jugador
   * @param player datos del jugador
   * @return Jugador modificado
   */
  modify(id: string, playerData: PlayerEntity): Promise<UpdateResult>;

  /**
   * Eliminar un jugador
   * @param id Identificador único del jugador
   * @return True si eliminó al jugador
   */
  delete(id: string): Promise<boolean>;

  /**
   * Cambia la edad de un jugador
   * @param id Identificador único del jugador
   * @param age nuevo valor de edad
   */
  // updateAge(id: number, edad: number): Promise<UpdateResult>;
}