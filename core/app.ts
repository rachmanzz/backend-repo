import express from "express"
import useRoutes from "../routes/userRoutes"


const app = express()

const port = 3000

app.get('/', (_, res) => {
    res.send("Hello world")
})

app.use('/users', useRoutes)


app.listen(port, () => console.log("run on post 3000"))