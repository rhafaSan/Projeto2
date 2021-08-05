import { Router } from 'express';
import {GetAll, GetById, Post} from '../../Controllers/Public/EvaluationController';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);

export default routes;