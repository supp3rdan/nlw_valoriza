import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
        const authtoken = request.headers.authorization;
        
        if(!authtoken){
            return response.status(401).end();
        }

        const [ ,token ] = authtoken.split(" ")
        
        try {
            const { sub } = verify( token, "63041e27b99f519714f2c6f8ea45a653") as IPayload;
            
            request.user_id = sub;

            return next();
        } catch (err) {
            return response.status(401).end()
        }






}