import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Admins } from './Admins';
import { User } from './Users';

@Entity('connections')
class Connections {
  @PrimaryColumn()
  id: string;
  
  @JoinColumn({name:'admin_id'})
  @ManyToOne(()=> Admins)
  admin: Admins;

  @Column()
  admin_id: string;
  
  @Column()
  socket_id: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(()=> User)
  user: User;
  
  @Column()
  user_id: string;
  
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}
export {Connections};