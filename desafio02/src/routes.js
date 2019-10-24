import { Router } from 'express'; // usado para definir as rotas

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hellor World' }));

export default routes;
