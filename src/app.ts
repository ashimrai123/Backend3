import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routers/taskRoutes';
import userRouter from './routers/userRoutes';
import logger from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use((req,res,next) => {
    logger.info(`${req.method} ${req.path}`);
    next(); 
})

//body parser middleware
app.use(express.json());

//routes 
app.use(taskRoutes);
app.use(userRouter);

//error handler
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`);
})
