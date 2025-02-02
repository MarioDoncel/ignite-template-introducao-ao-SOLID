import express from "express";
import swaggerUI from 'swagger-ui-express'

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from './swagger.json'

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(express.json());

app.use("/users", usersRoutes);

export { app };
