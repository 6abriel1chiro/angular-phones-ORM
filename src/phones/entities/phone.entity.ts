import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  marca: string;
  @Column()
  modelo: string;
  @Column()
  gbalmacenamiento: number;
  @Column()
  gbram: number;
}
