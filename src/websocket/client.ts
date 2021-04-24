import {io} from '../http';
import {ConnectionsService} from '../services/ConnectionsService';
import { UsersService } from '../services/UsersService';
import { MessagesServices} from '../services/MessagesServices';

interface IParam {
  text: string;
  email: string;
}


io.on('connect', (socket) => {
  
  const connectionService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesServices = new MessagesServices();

  socket.on('client_first_access',async params => {
    const socket_id = socket.id;
    const {text,email} = params as IParam;
    let user_id:string = null;
    let admin_id:string = null;
    const userExists = await usersService.findByEmail(email);
    
    if(!userExists){
      const user = await usersService.create(email);
      await connectionService.create({
        socket_id,
        user_id: user.id
      });
      user_id = user.id;
    }else{
      user_id = userExists.id;
      const connection = await connectionService.findByUserID(userExists.id);
      if(!connection){
        await connectionService.create({
          socket_id,
          user_id: userExists.id
        });
      }else{
        connection.socket_id = socket.id;
        await connectionService.create(connection);
      }
    }
    await messagesServices.create({user_id,text,admin_id});
  })
});