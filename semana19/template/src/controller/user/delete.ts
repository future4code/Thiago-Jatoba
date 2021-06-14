import { Request, Response } from "express"
import { deleteUserBusiness } from "../../business/user/deleteUserBusiness"
import { deleteUser } from "../../data/user/deleteUsers"

export const deleteU = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string
        const token = req.headers.authorization as string

        await deleteUserBusiness(id, token)

        res
        .status(200)
        .send("Usuário Deletado!")

    } catch (error) {
        res
        .status(400)
        .send(error.message)
    }
}