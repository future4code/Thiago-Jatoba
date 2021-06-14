import * as JWT from 'jsonwebtoken'
import { authenticationData } from '../types'

export const generateToken = (input: authenticationData): string =>{
    return JWT.sign(
        input,
        String(process.env.JWT_KEY),
        { expiresIn: '1d'}
    )  
}

export const getTokenData = (token: string): authenticationData | null =>{
    try{
        const { id } = JWT.verify (token, String(process.env.JWT_KEY)) as authenticationData
        
        return { id }
        
    } catch (error) { return null }

}