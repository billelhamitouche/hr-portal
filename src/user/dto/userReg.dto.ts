import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserRegisterDot{

    @IsNotEmpty()
    firstName : string;

    @IsNotEmpty()
    lastName : string;

    @IsNotEmpty( )
    @IsEmail()
    email : string;
    
    @IsNotEmpty()
    @Length(8,24)
    password : string;

    @IsNotEmpty( )
    accountType : string ;

    @IsNotEmpty()
    contact : string ;

    @IsNotEmpty()
    location : string ;

    @IsNotEmpty()
    profileUrl : string ;

    @IsNotEmpty()
    jobTitle : string;

    @IsNotEmpty()
    about : string;

}