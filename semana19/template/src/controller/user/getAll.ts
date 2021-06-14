import { Request, Response } from "express"
import { allUserBusiness } from "../../business/user/allUserBusiness"

export const all = async ( req: Request, res: Response): Promise<void> => {
    try{
        const token = req.headers.authorization as string

        const result = await allUserBusiness(token)

        res
        .status(200)
        .send({result})

    }catch (error){
        res.status(400).send(error.message)
    }
    
}