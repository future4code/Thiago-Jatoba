import { Router } from "express"
import { login } from "../controller/user/login"
import { signup } from "../controller/user/signup"

export const userRouter = Router()

userRouter.post("/login", login)
userRouter.post("/signup", signup)