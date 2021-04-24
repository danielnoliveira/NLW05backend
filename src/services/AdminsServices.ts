import { getCustomRepository, Repository } from "typeorm";
import { Admins } from "../entities/Admins";
import { AdminsRepository } from "../repositories/AdminsRepository";


class AdminsServices {
  private adminsRepository: Repository<Admins>

  constructor(){
    this.adminsRepository = getCustomRepository(AdminsRepository);
  }

  async create(email:string){
    const adminAlreadyExists = await this.adminsRepository.findOne({email});

    if(adminAlreadyExists){
      return adminAlreadyExists;
    }

    const admin = await this.adminsRepository.create({
      email
    });

    await this.adminsRepository.save(admin);
    
    return admin;
  }
}

export {AdminsServices};