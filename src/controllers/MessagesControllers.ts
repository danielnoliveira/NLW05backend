import {Request,Response} from 'express';
import { MessagesServices } from '../services/MessagesServices';

class MessagesControllers {
  async create(request:Request,response:Response){
    const messagesServices = new MessagesServices();

    const {text,admin_id,user_id} = request.body;
    
    const message = await messagesServices.create({
      text,
      admin_id,
      user_id
    });

    return response.json(message);
  }
  async showByUser(request:Request,response:Response){
    const {id} = request.params;

    const messagesServices = new MessagesServices();

    const list = await messagesServices.listByUser(id);

    return response.json(list);

  }
}

export {MessagesControllers};