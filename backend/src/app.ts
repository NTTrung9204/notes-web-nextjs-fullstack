import express from "express";
import { connectRedis } from "./config/redis";
import { router } from "./routes";
import cors from "cors";
import { connectMysql } from "./config/mysql";
import { migrateDB } from "./migrations/migrate";

const app = express();

connectRedis();
connectMysql();
migrateDB()

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["PATCH", "GET", "POST"],
  })
);

app.use("/api", router);

export default app;
