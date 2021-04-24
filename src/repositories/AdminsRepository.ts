import { EntityRepository, Repository } from "typeorm";
import { Admins } from "../entities/Admins";

@EntityRepository(Admins)
class AdminsRepository extends Repository<Admins>{

}

export {AdminsRepository};