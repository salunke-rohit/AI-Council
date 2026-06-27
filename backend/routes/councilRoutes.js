import express from 'express';
import { runCouncil } from '../controllers/councilController.js';

const router = express.Router();
router.post('/run', runCouncil);

export default router;
