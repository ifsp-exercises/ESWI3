import { Router } from 'express';

const routes = Router();

routes.get('/products', (_, response) => response.json({ route: 'products' }));

routes.get('/clients', (_, response) => response.json({ route: 'clients' }));

export default routes;
