import { Router } from 'express';

import unauthenticatedRoutes from './unauthenticatedRoutes';
import authenticatedRoutes from './authenticatedRoutes';

const routes = new Router();

routes.use('/', unauthenticatedRoutes);
routes.use('/', authenticatedRoutes);

export default routes;
