import { BaseEntity,BeforeUpdate,Column,Entity, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('company')
export class company extends BaseEntity {

    @Column()
    name : string;

    @Column({
        unique:true,
    })
    @Column()
    email: string;

    @Column()
    password:string

    @Column()
    contact:string

    @Column()
    location:string

    @Column()
    profileUrl : string ;

    @Column()
    about : string;

    @OneToMany(()=> Job , (job) => job.company)   
    jobPosts : Job[];


    @BeforeUpdate()
    async comparePassword(password: string){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password ,salt);
    }
}

