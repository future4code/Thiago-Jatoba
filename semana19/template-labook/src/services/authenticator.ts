import * as jwt from "jsonwebtoken"

export type authenticationData = {
    id: string,
}

function generateToken(
    payload: authenticationData
): string {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
}