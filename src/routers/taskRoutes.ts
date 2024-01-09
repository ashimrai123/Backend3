import express from 'express';
import * as controller from '../controllers/taskController';

const router = express.Router();

router.get('/todo',controller.getAllTasks);
router.post('/todo', controller.createTasks);
router.get('/todo/:title', controller.getTaskByTitle);


export default router;