import { Router } from 'express';
import companiesRouter from './companies.routes';
import usersRouter from './users.routes';
import statesRouter from './states.routes';
import addressRouter from './address.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);
routes.use('/states', statesRouter);
routes.use('/address', addressRouter);

export default routes;
