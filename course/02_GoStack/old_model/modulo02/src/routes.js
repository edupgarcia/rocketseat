import { Router } from "express";

import UserController from "./app/controlers/UserController";
import SessionController from "./app/controlers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.put("/users", UserController.update);

export default routes;
