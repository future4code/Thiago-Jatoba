import { getAllUser } from "../../data/user/getAllUsers";
import { getTokenData } from "../../services/authenticator";

export const allUserBusiness = async (
    token: string
) => {
    if (!token){
        throw new Error ("Token not Exist")
    }

    const isValidToken = await getTokenData(token)
    if (!isValidToken){
        throw new Error ("Invalid Token")
    }
    
    const users = await getAllUser()

    return users
}