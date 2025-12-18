import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import userRouter from "./routes/users.routes.js";
import accountRouter from "./routes/accounts.routes.js";
import movesRouter from "./routes/moves.routes.js";
import codesRouter from "./routes/codes.routes.js";

const app = express();

const corsOptions = {
  origin: process.env.ORIGIN_ENV,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(cors(corsOptions));
app.use("/api/users", userRouter);
app.use("/api/accounts", accountRouter);
app.use("/api/moves", movesRouter);
app.use("/api/codes", codesRouter);

app.listen(3000);
console.log("server on port ", 3000);
