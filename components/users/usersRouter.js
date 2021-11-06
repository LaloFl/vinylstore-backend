import {Router} from 'express';

// services
import UsersService from './usersService.js';
const service = new UsersService();

const router = Router();

router.get('/', (req, res) => {
  res.json(service.findAll());
});

router.post('/', (req, res) => {
  res.json(service.create(req.body));
})

export default router;