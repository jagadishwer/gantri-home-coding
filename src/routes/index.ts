import {Router} from 'express';
import artRouter from './artRoutes';
import userRouter from "./userRoutes";

const appRouter:Router = Router();

appRouter.use('/art', artRouter);
appRouter.use('/users', userRouter);

export default appRouter;



