import * as jwt from "jsonwebtoken";
export const APP_SECRET = "GraphQL-is-aw3some";

export interface AuthTokenPayload {
    userId:number
}
export function decodeAuthHeader(authHeader:String) : AuthTokenPayload {
    const token = authHeader.split(' ')[1];
    if(!token) {
        throw new Error("No token found")
    }

    return jwt.verify(token, APP_SECRET) as AuthTokenPayload
}