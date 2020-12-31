import { Router } from 'express';
import companiesRouter from './companies.routes';

const routes = Router();

routes.use('/companies', companiesRouter);

export default routes;
