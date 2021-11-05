import express from 'express';

import ProductsService from '../services/productsService.js';
const service = new ProductsService();

const router = express.Router();

router.get('/', (req, res) => {
  res.json(service.findAll());
});
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(service.findById(id));
});

router.post('/', (req, res) => {
  const product = req.body;
  res.json(service.create(product));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const product = req.body;
  res.json(service.update(id, product));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json(service.delete(id));
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const product = req.body;
  res.json(service.patch(id, product));
})

export default router;