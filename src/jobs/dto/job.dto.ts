import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";

class DetailDto {
    @IsNotEmpty()
    @IsString()
    desc: string;
  
    @IsNotEmpty()
    @IsString()
    requirements: string;
}  

export class jobDto{

    @IsNotEmpty()
    jobTitle: string;
    
    @IsNotEmpty()
    jobType : string;
   
    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
    salary: number;
    
    @IsNumber()
    vacancies : number;

    @IsNumber()
    experiences : number;

    @ValidateNested()
    detail: DetailDto;

 }