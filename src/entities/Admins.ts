import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity('admins')
class Admins {
  @PrimaryColumn()
  id: string;
  @Column()
  email: string;
  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {Admins};