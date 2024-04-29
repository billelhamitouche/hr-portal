import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class companyDto{
 
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @Length(6,10)
    password:string

}