import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import userRouter from "./routes/users.routes.js";
import accountRouter from "./routes/accounts.routes.js";
import movesRouter from "./routes/moves.routes.js";
import codesRouter from "./routes/codes.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/users", userRouter);
app.use("/api/accounts", accountRouter);
app.use("/api/moves", movesRouter);
app.use("/api/codes", codesRouter);

app.listen(3000);
console.log("server on port ", 3000);
