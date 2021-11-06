import {Router} from 'express';

// services
import ProductsService from './productsService.js';
const service = new ProductsService();

const router = Router();

router.get('/', (req, res) => {
  service.findAll(req.query)
  .then(users => {res.json(users);})
  .catch(err => {res.status(500).json(err);});  
});

router.get('/:id', (req, res) => {
  service.findById(req.params.id)
  .then(user => {res.json(user);})
  .catch(err => {res.status(500).json(err);});
});

router.post('/', (req, res) => {
  res.json(service.create(req.body))
})

router.patch('/:id', (req, res) => {
  service.patch(req.params.id, req.body)
  .then(user => {res.json(user);})
  .catch(err => {res.status(500).json(err);});
})

router.delete('/:id', (req, res) => {
  service.delete(req.params.id)
  .then(user => {res.json(user);})
  .catch(err => {res.status(500).json(err);});
})

export default router;