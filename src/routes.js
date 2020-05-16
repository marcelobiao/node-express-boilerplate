import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({success: 'Hello World!'});
});

export default routes;