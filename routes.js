import express from 'express';

import usersRouter from './components/users/usersRouter.js';
import productsRouter from './components/products/productsRouter.js';

export default function routerAPI(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/products', productsRouter);
}
