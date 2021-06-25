import { Request, Response } from "express";
import { ListUSersService } from "../services/ListUSersService";

class ListUsersController {
    async handle(request: Request, response: Response){
        const listUsersService = new ListUSersService();
        
        const users = await listUsersService.execute();

        return response.json(users);
    }
}

export { ListUsersController }