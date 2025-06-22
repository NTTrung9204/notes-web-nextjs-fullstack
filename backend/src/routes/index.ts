import express from 'express';
import { router as counterRoutes } from './counter.routes';

const router = express.Router()

router.use('/counter', counterRoutes)

export { router }