import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Vitor Afonso',
    email: 'vitorafonso33@gmail.com',
    password_hash: 123,
  });
  res.send(user);
});

export default routes;
