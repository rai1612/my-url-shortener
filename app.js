import express from "express";
// const bodyParser = require("body-parser");
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "./config/config.env",
});
const app = express();

// using middlewares
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// importing routes
import link from "./routes/link.js";

app.use("/api/v1", link);

export default app;
