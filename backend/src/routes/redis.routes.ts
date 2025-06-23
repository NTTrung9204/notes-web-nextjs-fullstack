import { redisController } from './../controllers/redis.controller';
import express from 'express';

const router = express.Router()

router.get('/', redisController.getAll)
router.post('/', redisController.)
router.get('/:key', redisController.getOne)
router.patch('/:key', redisController.update)
router.delete('/:key', redisController.delete)

export { router }