import express from 'express';
import { Register } from '../controllers/Register.controller';

const router=express.Router();
router.post('/register',Register)
export default router;