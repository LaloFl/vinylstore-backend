import {Router} from 'express';

// services
import UsersService from './usersService.js';
const service = new UsersService();

const router = Router();

router.get('/', (req, res) => {
  service.findAll().then(users => {
    res.json(users);
  }).catch(err => {
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  service.findById(req.params.id).then(user => {
    res.json(user);
  }).catch(err => {
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  res.json(service.create(req.body));
})

export default router;