import { IsNotEmpty } from "class-validator";

export class jobDto{

    @IsNotEmpty()
    jobTitle: string;
    
    @IsNotEmpty()
    jobType : string;
   
    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
    salary: number;

    vacancies : number;

        
 }