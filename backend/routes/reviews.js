/**
 * API routes: checkout-orchestration
 * Task: Create API route stubs for checkout orchestration in `backend/routes/reviews.js`
 */
'use strict';

const express = require('express');
const router = express.Router();

function validateBody(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    next();
  };
}

/** GET /api/checkout-orchestration */
router.get('/', async (req, res) => {
  try {
    const items = await req.services.reviews.getAll(req.query);
    res.json({ data: items });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

/** GET /api/checkout-orchestration/:id */
router.get('/:id', async (req, res) => {
  try {
    const item = await req.services.reviews.getById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json({ data: item });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

/** POST /api/checkout-orchestration */
router.post('/', async (req, res) => {
  try {
    const item = await req.services.reviews.create(req.body);
    res.status(201).json({ data: item });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

/** PUT /api/checkout-orchestration/:id */
router.put('/:id', async (req, res) => {
  try {
    const item = await req.services.reviews.update(req.params.id, req.body);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json({ data: item });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

/** DELETE /api/checkout-orchestration/:id */
router.delete('/:id', async (req, res) => {
  try {
    await req.services.reviews.remove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

module.exports = router;
