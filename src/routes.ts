import {Router} from 'express';
import { AdminsControllers } from './controllers/AdminsControllers';
import { MessagesControllers } from './controllers/MessagesControllers';
import { SettingsController } from './controllers/SettingsController';
import { UsersControllers } from './controllers/UsersControllers';

const routes = Router();

const settingsController = new SettingsController();
const usersControllers = new UsersControllers();
const messagesControllers = new MessagesControllers();
const adminsControllers = new AdminsControllers();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post('/users',usersControllers.create);

routes.post('/messages',messagesControllers.create);
routes.get('/messages/:id',messagesControllers.showByUser);

routes.post('/admins',adminsControllers.create);

export {routes};