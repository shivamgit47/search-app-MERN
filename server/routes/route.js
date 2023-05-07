import express from 'express';
import {getads,getsearch} from '../controllers/controller.js';

//express Router
const router = express.Router();

//route to get ads
router.get('/',getads);

//route to search ads
router.get('/search/:key',getsearch);

export default router;