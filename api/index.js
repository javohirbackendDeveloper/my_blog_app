import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./router/auth.routes.js";
import cookieParser from "cookie-parser";
import postRouter from "./router/post.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routers
app.use(authRouter);
app.use(postRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("Server is running on the " + PORT);
});
