import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));