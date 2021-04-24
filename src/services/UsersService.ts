import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
  private usersRepository: Repository<User>;
  
  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async findByEmail(email: string) {
    const userExists = await this.usersRepository.findOne({email});

    return userExists;
  }

  async create(email:string){

    const userExists = await this.findByEmail(email);

    if(userExists){
      return userExists;
    }

    const user = await this.usersRepository.create({
      email,
    });
    await this.usersRepository.save(user);

    return user;
  }
}


export {UsersService};