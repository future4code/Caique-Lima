import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { connection } from './connection'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/users", async (req: Request, res: Response): Promise<any> => {
    try {
        const users = await connection("ToDoListUser")
        res.status(200).send(users)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
})

app.get("/users/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id: number = Number(req.params.id)
        const users = await connection("ToDoListUser").where({ id: id })
        res.status(200).send(users)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
})















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running at http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})