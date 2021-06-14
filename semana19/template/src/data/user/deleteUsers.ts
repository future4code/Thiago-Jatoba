import { connection } from "../connection";

export const deleteUser = async (id: string) => {
    await connection.raw(`DELETE from User_Arq
    WHERE id="${id}"`)

}