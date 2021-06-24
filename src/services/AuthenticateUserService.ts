import { getCustomRepository } from 'typeorm';

import { compare } from "bcryptjs";

import { UsersRepositories } from '../repositories/UserRepositories';

interface AnthenticateRequest {
    email: string;
    password: string;
}

class AnthenticateUserService {
    
    async execute({ email, password }: AnthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect")
        }
    }
}

export { AnthenticateUserService }