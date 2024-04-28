import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User)
    private userRepository: Repository<User> ){
        
    }
    
    async getUserbyEmail(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({where : { email }});
    }
}