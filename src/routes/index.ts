import { Router } from 'express';
import companiesRouter from './companies.routes';
import usersRouter from './users.routes';
import statesRouter from './states.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);
routes.use('/states', statesRouter);

export default routes;
