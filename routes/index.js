import express from 'express';

import usersRouter from './usersRouter.js';
import productsRouter from './productsRouter.js';

export default function routerAPI(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/products', productsRouter);
}
