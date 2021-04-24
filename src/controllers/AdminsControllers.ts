import {Request, Response} from 'express';
import { AdminsServices } from '../services/AdminsServices';

class AdminsControllers {

  async create(request:Request,response:Response){
    const adminsService = new AdminsServices();
    
    const {email} = request.body;

    const admin = await adminsService.create(email);

    return response.json(admin);
  }
}

export {AdminsControllers};