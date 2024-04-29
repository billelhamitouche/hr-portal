import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, UpdateDateColumn } from "typeorm";
import { Company } from "src/company/company.entity";
import { User } from "src/user/user.entity";


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
    detail: { desc: string; requirements: string }; // Define the nested structure
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

  // Automatically updated to the current date and time whenever the entity is updated
     @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
     updatedAt: Date;

     
     @ManyToOne(() => Company, (company) => company.jobPosts)
     company: Company;

     @OneToMany(()=> User , (user)=> user.job)
      users: User[];


}





