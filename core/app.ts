import express from "express"
import useRoutes from "../routes/userRoutes"


const app = express()

const port = 3000


app.use(express.json());

app.use(useRoutes)


app.listen(port, () => console.log("run on post 3000"))