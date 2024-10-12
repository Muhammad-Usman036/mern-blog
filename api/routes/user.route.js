// beacuse in grand project there are multiple apis so it is a good practice to handle in a separate file.
import express from 'express';
import { test } from '../controllers/user.controller.js';
const router  = express.Router();
// 
router.get('/test',test);

export default router;