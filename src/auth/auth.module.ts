import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "src/config/jwt.config";

@Module({
    imports: [UserModule,JwtModule.registerAsync(jwtConfig)],
    providers: [AuthService,],
}
)
export class AuthModule{}
