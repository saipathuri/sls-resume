import cors from "cors";
import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";

import { isDevEnvironment } from "./config/Config";

import aboutRouter from "./routes/About";
import educationRouter from "./routes/Education";
import experienceRouter from "./routes/Experience";

const app = express();

if (isDevEnvironment()) {
  app.use(morgan("combined"));
}

app.use(helmet());
app.use(cors());
app.use(json());
app.use("/about", aboutRouter);
app.use("/education", educationRouter);
app.use("/experience", experienceRouter);

export default app;
