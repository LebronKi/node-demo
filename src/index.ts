import express ,{Request, Response} from "express"
import bodyParser from "body-parser";
import cors from "cors"


const app = express()

const corsMiddleWare = cors()
app.use(corsMiddleWare)
const jsonBodyMiddleWare = bodyParser.json()
app.use(jsonBodyMiddleWare)

const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    let helloDima2 = "Hello World + :itDima";
    res.send(helloDima2)
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})