import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class PlayerEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   name: string;

   @Column()
   lastName: string;

   @Column()
   age: number;

   @Column()
   team: string;
}