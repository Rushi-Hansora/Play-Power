import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config/env.js";
import { apiRouter } from "./routes/apiRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const app = express();

// Security Middleware
app.use(helmet());
app.use(
  cors({
    origin: [config.clientUrl, "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

// Health Check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "airbnb-clone-api",
    timestamp: new Date().toISOString(),
  });
});

// REST API v1 Routing
app.use("/api/v1", apiRouter);

// Centralized Error Handling Middleware
app.use(errorHandler);
