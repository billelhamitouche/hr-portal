import { BaseEntity,Column,Entity, OneToMany } from "typeorm";

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

    @OneToMany(()=> Job , job => job.company)   
    jobPosts : Job[];

}