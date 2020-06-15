import express from "express";
import helmet from "helmet";

import * as homeController from "./controllers/home";

const app = express();

app.use(helmet());
app.get("/", homeController.index);

export default app;
