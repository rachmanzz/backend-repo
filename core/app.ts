import * as dotenv from 'dotenv';
dotenv.config();

import express from "express"
import useRoutes from "../routes/userRoutes"

import cors from "cors"

const app = express()

app.use(cors());

const port = 3000


app.use(express.json());

app.use(useRoutes)


app.listen(port, () => console.log("run on post 3000"))