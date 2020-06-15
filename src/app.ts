import express, { Application } from "express";
import helmet from "helmet";

import * as homeController from "./controllers/home";

const app: Application = express();

app.use(helmet());
app.get("/", homeController.index);

export default app;
