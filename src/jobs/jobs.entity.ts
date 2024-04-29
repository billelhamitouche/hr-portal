import { BaseEntity, Column, Entity, ManyToOne } from "typeorm";
import { Company } from "src/company/company.entity";


@Entity('job')
export class Job extends BaseEntity {

    @Column()
    jobTitle: string;
    
    @Column()
    jobType : string;

    @Column()
    location: string;

    @Column()
    salary: number;

    @Column()
    vacancies : number;

    @Column( {
        default:0,
    })
    experiences : number;

    @Column('jsonb', { nullable: true }) // Use JSONB type to store nested structure
    detail: { desc: string; requirements: string[] }; // Define the nested structure
  
     @ManyToOne(() => Company, (company) => company.jobPosts)
     company: Company;

}

