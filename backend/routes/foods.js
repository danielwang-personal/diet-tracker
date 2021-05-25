import express from 'express';

import { getFoods } from '../controllers/foods.js'

const router = express.Router();
router.get('/', getFoods);

export default router