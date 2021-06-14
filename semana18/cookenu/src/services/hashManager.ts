import { hashSync, genSaltSync, compareSync } from "bcryptjs";

export const generateHash = (plaintext: string): string => {
    const salt: string = genSaltSync(Number(process.env.COST))

    return hashSync(plaintext, salt)
}
