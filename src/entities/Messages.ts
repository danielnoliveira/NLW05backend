import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import {User} from './Users';
import {v4 as uuid} from 'uuid';
import { Admins } from "./Admins";

@Entity("messages")
class Messages {
  @PrimaryColumn()
  id: string;
  
  @JoinColumn({name:'admin_id'})
  @ManyToOne(()=> Admins)
  admin: Admins;

  @Column()
  admin_id: string;
  
  @Column()
  text: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(()=> User)
  user: User;
  
  @Column()
  user_id: string;
  
  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {Messages};