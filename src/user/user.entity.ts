import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Job } from "src/jobs/jobs.entity";

@Entity('user')
export class User extends BaseEntity{
    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column(
        {unique :true}

    )
    email : string;
    
    @Column()
    password : string;

    @Column(
        {default: "seeker"}
    )
    accountType : string ;

    @Column()
    contact : string ;

    @Column()
    location : string ;

    @Column()
    profileUrl : string ;

    @Column()
    jobTitle : string;

    @Column()
    about : string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

  // Automatically updated to the current date and time whenever the entity is updated
     @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
     updatedAt: Date;


    @ManyToOne(()=>  Job, (job)=> job.users)
    job: Job;

    @BeforeInsert()
    @BeforeUpdate()
    async setPassword(password: string){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password ,salt);
    }

    
}