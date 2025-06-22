import express from 'express';
import { notesController } from '../controllers/notes.controller';

const router = express.Router()

router.get('/', notesController.get)
// router.post('/', notesController.create)

export { router }