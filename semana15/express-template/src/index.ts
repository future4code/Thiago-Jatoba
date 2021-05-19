import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/test', (req: Request, res: Response) => {

    const nome = req.body.nome
    const cabelo = req.query.cabelo


    res.send({message: `HI,', ${nome}, seu cabelo é ${cabelo}`})
})

// app.get('/')

app.listen (3003, () => {
    console.log('Server is running at http://localhost:3003')
}) //vem por ultimo, em razão da performance