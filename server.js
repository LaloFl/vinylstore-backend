import express from 'express';
import routerAPI from './routes.js';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routerAPI(app);

app.listen(3000);