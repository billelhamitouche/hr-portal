import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService{
    constructor(private readonly userService : UserService){}

    async validateUserCredentiels(email: string , password: string): Promise<any>{
    
        const user = await this.userService.getUserbyEmail(email);
        if (!user) {
          // User not found
           throw new BadRequestException();
        }

    const isPasswordValid =  await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Passwords match, return the user
      return user;
    } else {
      // Passwords do not match
      throw new UnauthorizedException();
    }

    }

    createToken 
}