import { insertUser } from "../../data/user/insertUsers"
import { hash } from "../../services/hashManager"
import { userData } from "../../model/user"
import { generateToken } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"

export const signUpBusiness = async(userData: userData): Promise<string> => {
    if(
        !userData.name||
        !userData.email ||
        !userData.password ||
        !userData.role
    ){
        throw new Error("Fill in the blanks with name, email and password")
    }

    const cypherPassword = await hash(userData.password);

    const newUser = {
        ...userData,
        password: cypherPassword,
        id: generateId()
    }

    await insertUser(newUser)

    const token: string = generateToken({
        id: newUser.id,
        role: userData.role
    })

    return token
}