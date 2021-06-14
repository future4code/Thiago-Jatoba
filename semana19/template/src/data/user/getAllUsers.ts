import { connection} from "../connection"

export const getAllUser = async () => {

    const result = await connection.raw(`SELECT * FROM User_Arq`)

    return result[0]
}