import express, { Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express()

app.use(express.json()) // a função express() inicia a aplicação web com express
app.use(cors()) // os .use() ativam os módulos de Bodyparser e Cors

type account = {
    value: number,
    date: string,
    description: string
}

type user = {
    cpf: string,
    name: string,
    birthDate: string,
    extract: account[]
}

let users: user[] = [
    {
        cpf:'000.000.000-00',
        name: 'Usuário Teste',
        birthDate: "1980-10-09",
        extract:[
            {
            value: 200,
            date:'2021-03-20',
            description: 'Padaria'
            }
        ]
    }
]


app.get('/users', (req: Request, res: Response )=> {
    try{
        const cpf = req.query.cpf

        if (!cpf){
            throw new Error ('Insert a valid CPF')
        }

        const result = users.filter((user) => user.cpf === cpf)

        if (!result.length){
            throw new Error ('User not found!')
        }

        res.status(200).send(result)
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong!')
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const adress = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${adress.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})
