import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import{ all } from './controller/user/getAll'
import { deleteU } from "./controller/user/delete"


app.post('/user/signup', signup)
app.post('/user/login', login)
app.get ('/all', all)
app.delete('/delete/:id', deleteU)
